exports.reserve_button = function reserve_button(){
    let result = {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
          "type": "buttons",
          "text": "โปรดเลือกรูปแบบการจอง",
          "actions": [
            {
              "type": "message",
              "label": "ค้นหาคิวว่าง",
              "text": "ค้นหาคิวว่าง"
            },
            {
              "type": "message",
              "label": "ค้นหาหมอนวด",
              "text": "ค้นหาหมอนวด"
            }
          ]
        }
      };

      return result;
}
