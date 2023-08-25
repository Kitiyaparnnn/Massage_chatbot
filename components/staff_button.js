exports.staff_button = function staff_button() {
    let result = {
      "type": "template",
      "altText": "This is a buttons template",
      "template": {
        "type": "buttons",
        "text": "เมนูสำหรับหมอนวด",
        "actions": [
          {
            "type": "message",
            "label": "ตารางงาน",
            "text": "ตารางงาน"
          },
          
        ]
      }
    };
  
    return result;
  }
  