const { reserve_button } = require("../components/reserve_button");

exports.intentReservation = function intentReservation(req, res, next) {
    console.log("intent: reservation");
    var today_date = new Date().toString;
    var max_date = today.getDate()+3;

    console.log(`today: ${today_date}`);
    console.log(`max_date: ${max_date}`);

    let result = {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
          "type": "buttons",
          "text": "ยินดีต้อนรับเข้าสู่การจองค่ะ กรุณาเลือกวันที่ต้องการเข้าใช้บริการ",
          "actions": [
            {
              "type": "datetimepicker",
              "label": "Datetime Picker",
              "data": "storeId=12345",
              "mode": "datetime",
              "initial": today_date,
              "max": "2018-12-31T23:59",
              "min": today_date
             }
            
          ]
        }
      };
    return result;
}