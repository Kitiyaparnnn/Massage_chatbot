const { reserve_button } = require("../components/reserve_button");

exports.intentReservation = function intentReservation(req, res, next) {
    console.log("intent: reservation");
    let result = {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
          "type": "buttons",
          "text": "โปรดติดต่อเจ้าหน้าที่เพื่อจองคิวได้ทางเบอร์โทรศัพท์",
          "actions": [
            {
              "type": "uri",
              "label": "☎️ 053117548",
              "uri": "tel:053117548"
            },
            {
                "type": "uri",
                "label": "📞 0656983469",
                "uri": "tel:0656983469"
              },
            
          ]
        }
      };
    return result;
}