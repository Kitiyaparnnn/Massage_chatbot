exports.info_button = function info_button(){
    let result = {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
          "type": "buttons",
          "title": "Menu",
          "text": "โปรดเลือกข้อมูลร้านที่ต้องการสอบถาม",
          "actions": [
            {
              "type": "message",
              "label": "วันเปิดปิด",
              "text": "วันเปิดปิด"
            },
            {
              "type": "message",
              "label": "แผนนวด",
              "text": "แผนนวด"
            }
          ]
        }
      };

      return result;
}
