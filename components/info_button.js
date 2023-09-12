exports.info_button = function info_button() {
  let result = {
    "type": "template",
    "altText": "This is a buttons template",
    "template": {
      "type": "buttons",
      "text": "โปรดเลือกข้อมูลที่สนใจ",
      "actions": [
        {
          "type": "message",
          "label": "⏳ เวลาให้บริการ",
          "text": "เวลาให้บริการ"
        },
        {
          "type": "message",
          "label": "💆‍♀️ บริการนวดแผนไทย",
          "text": "บริการนวดแผนไทย"
        },
        {
          "type": "uri",
          "label": "🧭 แผนที่",
          "uri": "https://goo.gl/maps/H9zUARJpHMJbXzyi8"
        },
        {
          "type": "message",
          "label": "👩‍💼 ติดต่อเจ้าหน้าที่",
          "text": "ติดต่อเจ้าหน้าที่"
        },
      ]
    }
  };

  return result;
}
