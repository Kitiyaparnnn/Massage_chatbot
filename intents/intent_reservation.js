const { reserve_button } = require("../components/reserve_button");
const axios = require("axios");
const api_token = process.env.API_TOKEN;
const api_url = process.env.API_URL;

exports.intentReservation = function intentReservation(stage,detail) {
  console.log("intent: reservation");
  console.log(`stage: ${stage}`);

  switch (stage) {
    case 'reserve_date':
      return reserve_date();
    case 'reserve_plan':
      return reserve_plan();
    case 'reserve_duration':
      return reserve_duration();
    case 'reserve_user_name':
      return reserve_user_name();
    case 'reserve_user_phone':
      return reserve_user_phone();
    default:
      let result = {
        "type": "text",
        "text": "ติดต่อเจ้าหน้าที่ได้ทางเบอร์โทรศัทพ์ 📞0656983469 ค่ะ"
      };
      return result;

  }

  function reserve_date() {
    //manage time format to disply
    var today_date = new Date(new Date().toLocaleString({ timeZone: 'Asia/Bangkok' }));
    var max_date = new Date(new Date().toLocaleString({ timeZone: 'Asia/Bangkok' }));
    max_date.setDate(today_date.getDate() + 3);

    var current_date = today_date.getFullYear().toString() + '-' + String(today_date.getMonth() + 1).padStart(2, '0') + '-' + String(today_date.getDate()).padStart(2, '0');
    var current_time = today_date.toLocaleString('de-DE', { hour: '2-digit', hour12: false, timeZone: 'Asia/Bangkok' }).split(' ')[0] + ":" + String(today_date.getMinutes()).padStart(2, '0');
    var today_format = current_date + "t" + current_time;

    var next3_date = max_date.getFullYear().toString() + '-' + String(max_date.getMonth() + 1).padStart(2, '0') + '-' + String(max_date.getDate()).padStart(2, '0');
    var next3_time = max_date.toLocaleString('de-DE', { hour: '2-digit', hour12: false, timeZone: 'Asia/Bangkok' }).split(' ')[0] + ":" + String(max_date.getMinutes()).padStart(2, '0');
    var next3_format = next3_date + "t" + next3_time;

    let result = {
      "type": "text",
      "text": "กรุณาเลือกวัน-เวลาที่ต้องการจองใช้บริการ 🗓️",
      "quickReply": {
        "items": [
          {
            "type": "action",
            "action": {
              "type": "datetimepicker",
              "label": "🗓️ เลือกวันที่และเวลา",
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
    try {
      //get massage menu from host server
      const response = await axios.get(`${api_url}/checkMassagePlans?bookingQueue=1`, {
        headers: {
          Authorization: `Bearer ${api_token}`,
        },
      });

      const massagePlan = response.data;
      const labelRegex = /\([^)]+\)/g;

      let items = [];
      await massagePlan.massagePlans.forEach(e => {
        let label = e.plan.replace(labelRegex,'');
        let item = {
          "type": "action",
          "action": {
            "type": "postback",
            "label": `👉🏻 ${label}`,
            "data": `reserve_plan&${e.plan}`,
            "displayText": `👉🏻 ${e.plan}`
          }
        }
        items.push(item);
      });

      let result = {
        "type": "text",
        "text": "กรุณาเลือกบริการที่สนใจ 💆‍♀️",
        "quickReply": {
          "items": items
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

  async function reserve_duration() {
    
    let duration = [1, 1.5, 2, 2.5, 3]; //hour for reserve
    let items = [];
    await duration.forEach(e => {
      let item = {
        "type": "action",
        "action": {
          "type": "postback",
          "label": `🕑 ${e}`,
          "data": `reserve_duration&${e}`,
          "displayText": `${e}`
        }
      }
      items.push(item);
    });

    let result = {
      "type": "text",
      "text": "กรุณาเลือกจำนวน ชม. รับบริการ ⏱️",
      "quickReply": {
        "items": items
      }
    };
    return result;
  }

  function reserve_user_name() {
    let result =
    {
      "type": "text",
      "text": "ขอทราบชื่อของคุณลูกค้า✏️",
      "wrap": true,
    };

    return result;
  }

  function reserve_user_phone() {
    let result =
    {
      "type": "text",
      "text": "ขอทราบเบอร์โทรศัพท์ของคุณลูกค้า📞",
      "wrap": true,
    };

    return result;
  }
}