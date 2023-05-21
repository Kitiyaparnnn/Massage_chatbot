exports.info_button = function info_button(){
    let result = {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
          "type": "buttons",
          "title": "Menu",
          "text": "โปรดเลือกข้อมูลร้านที่ต้องการสอบถาม",
          "defaultAction": {
            "type": "text",
            "text": "ติดต่อเจ้าหน้าที่"
          },
          "actions": [
            {
              "type": "text",
              "text": "วันเปิดปิด"
            },
            {
              "type": "text",
              "text": "ค่าบริการแผนนวด"
            }
          ]
        }
      }

      return result;
}
