const { reserve_button } = require("../components/reserve_button");

exports.intentReservation = function intentReservation(req, res, next) {
    console.log("intent: reservation");
    var today_date = new Date();
    var max_date = today_date.getDate()+3;

    console.log(`today: ${today_date.toJSON()}`);
    console.log(`max_date: ${max_date.toJSON()}`);

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
              "initial": today_date.toJSON(),
              "max": "2023-12-31T23:59",
              "min": today_date.toJSON()
             }
            
          ]
        }
      };

      let result2 = {
        "type":"text",
        "text":"ยินดีต้อนรับเข้าสู่การจองค่ะ กรุณาเลือกวันที่ต้องการเข้าใช้บริการ",
        "quickReply":{
          "items":[
            {
              "type": "action", 
              
              "action": {
                "type": "datetimepicker",
                "label": "Select date",
                "data": "storeId=12345",
                "mode": "datetime",
                "initial": "2017-12-25t00:00",
                "max": "2018-01-24t23:59",
                "min": "2017-12-25t00:00"
              }
            }
          ]
        }
      }
    return result2;
}