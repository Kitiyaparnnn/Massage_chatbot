exports.info_button = function info_button() {
  let result = {
    "type": "template",
    "altText": "This is a buttons template",
    "template": {
      "type": "buttons",
      "text": "โปรดเลือกข้อมูลที่ต้องการสอบถาม",
      "actions": [
        {
          "type": "message",
          "label": "วันเปิดปิด",
          "text": "วันเปิดปิด"
        },
        {
          "type": "message",
          "label": "บริการนวดแผนไทย",
          "text": "บริการนวดแผนไทย"
        },
        {
          "type": "message",
          "label": "ติดต่อเจ้าหน้าที่",
          "text": "ติดต่อเจ้าหน้าที่"
        }
      ]
    }
  };

  return result;
}
