const { reserve_button } = require("../components/reserve_button");

exports.intentReservation = function intentReservation(req, res, next) {
  console.log("intent: reservation");
  var today_date = new Date();
  var max_date = new Date();
  max_date.setDate(today_date.getDate() + 3);

  var current_date = today_date.toISOString().split('T')[0];
  var current_time = today_date.toLocaleString('de-DE', {hour: '2-digit',   hour12: false, timeZone: 'Asia/Bangkok' }).split(' ')[0] + ":" + today_date.getMinutes().toString();
  var today_format = current_date + "t" + current_time;

  var next3_date = max_date.toISOString().split('T')[0];
  var next3_time = max_date.getHours() + ":" + max_date.getMinutes().toString();
  var next3_format = next3_date + "t" + next3_time;

  console.log(`today: ${today_format}`);
  console.log(`max_date: ${next3_format}`);

  let result = {
    "type": "text",
    "text": "ยินดีต้อนรับเข้าสู่การจองค่ะ กรุณาเลือกวันที่ต้องการเข้าใช้บริการ",
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