const axios = require("axios");
const api_token = process.env.API_TOKEN;
const api_url = process.env.API_URL;

async function intentSendReservationToAdmin(userId, userList) {   
    try {
        console.log('confirmed : ',JSON.stringify(userList[userId]));

        //send api to admin
        let body = JSON.stringify(userList[userId]);

        await axios.post(`${api_url}/bookMassageQueue`, body, {
            headers: {
                "Content-Type": "application/json",
              Authorization: `Bearer ${api_token}`,
            },
          });

        delete (userList[userId]);

        let result = {
            "type": "text",
            "text": "ระบบได้รับข้อมูลการจองของท่านแล้ว ขอบคุณที่สนใจใช้บริการของเรา🙇🏻‍♀️ \nโปรดรอเจ้าหน้าที่ติดต่อกลับ",
        };

        return result;
    } catch (error) {
        console.error(error);
        let result ={
            "type": "template",
            "altText": "This is a buttons template",
            "template": {
              "type": "buttons",
              "text": "จองไม่สำเร็จ โปรดติดต่อเจ้าหน้าที่ได้ทางเบอร์โทรศัพท์",
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
}

module.exports = { intentSendReservationToAdmin };