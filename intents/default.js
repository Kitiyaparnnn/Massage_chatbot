function defaultMessage() {
    console.log("intent: default");

    let result = {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
          "type": "buttons",
          "text": "ติดต่อเจ้าหน้าที่ได้ทางเบอร์โทรศัพท์",
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

module.exports = {defaultMessage};