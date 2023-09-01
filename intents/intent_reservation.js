const { reserve_button } = require("../components/reserve_button");
const axios = require("axios");

exports.intentReservation = function intentReservation(stage) {
  console.log("intent: reservation");
  console.log(`stage: ${stage}`);

  switch (stage) {
    case 'reserve_date':
      return reserve_date();
    case 'reserve_plan':
      return reserve_plan();
    default:
      let result = {
        "type": "text",
        "text": "ติดต่อเจ้าหน้าที่ได้ทางเบอร์โทรศัทพ์ ☎️053117548  หรือ 📞0656983469 ค่ะ"
      };
      return result;

  }

  function reserve_date() {
    var today_date = new Date(new Date().toLocaleString({ timeZone: 'Asia/Bangkok' }));
    var max_date = new Date(new Date().toLocaleString({ timeZone: 'Asia/Bangkok' }));
    max_date.setDate(today_date.getDate() + 3);

    var current_date = today_date.getFullYear().toString() + '-' + String(today_date.getMonth() + 1).padStart(2, '0') + '-' + String(today_date.getDate()).padStart(2, '0');
    var current_time = today_date.toLocaleString('de-DE', { hour: '2-digit', hour12: false, timeZone: 'Asia/Bangkok' }).split(' ')[0] + ":" + String(today_date.getMinutes()).padStart(2, '0');
    var today_format = current_date + "t" + current_time;

    var next3_date = max_date.getFullYear().toString() + '-' + String(max_date.getMonth() + 1).padStart(2, '0') + '-' + String(max_date.getDate()).padStart(2, '0');
    var next3_time = max_date.toLocaleString('de-DE', { hour: '2-digit', hour12: false, timeZone: 'Asia/Bangkok' }).split(' ')[0] + ":" + String(max_date.getMinutes()).padStart(2, '0');
    var next3_format = next3_date + "t" + next3_time;

    // function toIsoString(date) {
    //   var tzo = -date.getTimezoneOffset(),
    //     dif = tzo >= 0 ? '+' : '-',
    //     pad = function (num) {
    //       return (num < 10 ? '0' : '') + num;
    //     };

    //   return date.getFullYear() +
    //     '-' + pad(date.getMonth() + 1) +
    //     '-' + pad(date.getDate()) +
    //     'T' + pad(date.getHours()) +
    //     ':' + pad(date.getMinutes());

    // }
    // var today_format = toIsoString(today_date);
    // var next3_format = toIsoString(max_date);

    console.log(`today: ${today_format}`);
    console.log(`max_date: ${next3_format}`);

    let result = {
      "type": "text",
      "text": "ยินดีต้อนรับเข้าสู่การจองค่ะ \nกรุณาเลือกวันที่และเวลาต้องการเข้าใช้บริการ",
      "quickReply": {
        "items": [
          {
            "type": "action",
            "action": {
              "type": "datetimepicker",
              "label": "เลือกวันที่และเวลา",
              "data": "reserve_date",
              "mode": "datetime",
              "initial": today_format,
              "max": next3_format,
              "min": today_format
            }
          }
        ]
      }
    };
    return result;
  }

  async function reserve_plan() {

    const api_token = process.env.API_TOKEN;
    const api_url = process.env.API_URL;
    try {
      const response = await axios.get(`${api_url}/checkMassagePlans`, {
        headers: {
          Authorization: `Bearer ${api_token}`,
        },
      });

      const massagePlan = response.data;

      let items = [];
      await massagePlan.massagePlans.forEach(e => {
        let item = {
          "type": "action",
          "action": {
            "type": "postback",
            "data": "reserve_plan",
            "displayText": e.plan,

          }
        }
        items.push(item);
      });

      let result = {
        "type": "text",
        "text": "ยินดีต้อนรับเข้าสู่การจองค่ะ \nกรุณาเลือกวันที่และเวลาต้องการเข้าใช้บริการ",
        "quickReply": {
          "items": [
            {
              "type": "action",
              "action": {
                "type": "postback",
                "data": "reserve_plan&นวดกดจุด",
                "displayText": "นวดกดจุด",
                "inputOption": "openKeyboard",
                "fillInText": "---\nName: \nPhone: \nBirthday: \n---"
              }
            }
          ]
        }
      };

      return result;
    } catch (error) {
      console.error(error);
      let errorMessage = {
        "type": "text",
        "text": "ขออภัย มีข้อผิดพลาดในการดึงข้อมูล โปรดลองอีกครั้งในภายหลัง"
      };
      return errorMessage;
    }
  }
}