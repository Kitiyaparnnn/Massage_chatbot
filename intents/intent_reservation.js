const { reserve_button } = require("../components/reserve_button");

exports.intentReservation = function intentReservation(stage) {
  console.log("intent: reservation");
  console.log(`stage: ${stage}`);

  var today_date = new Date();
  var max_date = new Date();
  max_date.setDate(today_date.getDate() + 3);

  // var current_date = today_date.toISOString().split('T')[0];
  // var current_time = today_date.toLocaleString('de-DE', { hour: '2-digit', hour12: false, timeZone: 'Asia/Bangkok' }).split(' ')[0] + ":" + String(today_date.getMinutes()).padStart(2, '0');
  // var today_format = current_date + "t" + current_time;

  // var next3_date = max_date.toISOString().split('T')[0];
  // var next3_time = max_date.toLocaleString('de-DE', { hour: '2-digit', hour12: false, timeZone: 'Asia/Bangkok' }).split(' ')[0] + ":" + String(max_date.getMinutes()).padStart(2, '0');
  // var next3_format = next3_date + "t" + next3_time;

  function toIsoString(date) {
    var tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = function (num) {
        return (num < 10 ? '0' : '') + num;
      };

    return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes());

  }
  var today_format = toIsoString(today_date);
  var next3_format = toIsoString(max_date);

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