function intentConfirmReservation(msg, detail) {
  console.log("intent: confirm reservation");

  detail.status = 'complete';

  var date = detail.datetime.split('T')[0];
  var time = detail.datetime.split('T')[1];
  // console.log(date);
  var format_date = new Date(date).toLocaleDateString('en-GB');
  // console.log(format_date);

  let content =
  {
    "type": "bubble",
    "size": "kilo",
    "body": {
      "contents": [
        {
          "margin": "md",
          "size": "xxl",
          "text": "ยืนยันการจอง",
          "type": "text",
          "weight": "bold",
          "color": "#1DB446",
        },
        {
          "margin": "md",
          "type": "separator"
        },
        {
          "size": "md",
          "text": `ชื่อลูกค้า: ${detail.fullName} `,
          "type": "text",
          "wrap": true,
          "weight": "bold",
          "margin": "md"
        },
        {
          "size": "md",
          "text": `โทรศัพท์: ${detail.phoneNo}`,
          "type": "text",
          "wrap": true,
          "weight": "bold"
        },
        {
          "margin": "md",
          "type": "separator"
        },
        {
          "contents": [
            {
              "contents": [
                {
                  "color": "#555555",
                  "flex": 1,
                  "size": "sm",
                  "text": "บริการ",
                  "type": "text",
                  "wrap": true
                },
                {
                  "align": "end",
                  "color": "#111111",
                  "flex": 1,
                  "size": "sm",
                  "text": detail.massagePlan,
                  "type": "text",
                  "wrap": true
                }
              ],
              "layout": "horizontal",
              "type": "box"
            },
            {
              "contents": [
                {
                  "color": "#555555",
                  "flex": 0,
                  "size": "sm",
                  "text": "วันที่จอง",
                  "type": "text"
                },
                {
                  "align": "end",
                  "color": "#111111",
                  "size": "sm",
                  "text": format_date,
                  "type": "text"
                }
              ],
              "layout": "horizontal",
              "type": "box"
            },
            {
              "contents": [
                {
                  "color": "#555555",
                  "flex": 0,
                  "size": "sm",
                  "text": "เวลา",
                  "type": "text"
                },
                {
                  "align": "end",
                  "color": "#111111",
                  "size": "sm",
                  "text": `${time} น.`,
                  "type": "text"
                }
              ],
              "layout": "horizontal",
              "type": "box"
            },
            {
              "contents": [
                {
                  "color": "#555555",
                  "flex": 1,
                  "size": "sm",
                  "text": "จำนวนชั่วโมง",
                  "type": "text",
                  "wrap": true
                },
                {
                  "align": "end",
                  "color": "#111111",
                  "flex": 1,
                  "size": "sm",
                  "text": `${detail.duration} ชม.`,
                  "type": "text"
                }
              ],
              "layout": "horizontal",
              "type": "box"
            }
          ],
          "layout": "vertical",
          "margin": "md",
          "spacing": "sm",
          "type": "box"
        },
        {
          "margin": "md",
          "type": "separator"
        },
        {
          "contents": [
            {
              "action": {
                "label": "ยกเลิก",
                "text": "ยกเลิก",
                "type": "message"
              },
              "type": "button"
            },
            {
              "action": {
                "label": "ยืนยัน",
                "text": "ยืนยัน",
                "type": "message"
              },
              "color": "#1DB446",
              "type": "button"
            }
          ],
          "layout": "horizontal",
          "margin": "md",
          "type": "box"
        }
      ],
      "layout": "vertical",
      "type": "box"
    }
  };

  let result = {
    "type": "flex",
    "altText": "confirmation card",
    "contents": content
  };

  return result;
}

module.exports = { intentConfirmReservation };