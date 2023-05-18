const axios = require("axios");
const api_token = process.env.API_TOKEN;
const api_url = process.env.API_URL;

async function intentOpenClose() {
  try {
    const response = await axios.get(`${api_url}/checkOpenStatus`, {
      headers: {
        Authorization: `Bearer ${api_token}`,
      },
    });

    const data = response.data;
    console.log(data);
    
    let dayOff = data.closeAtDays.join();
    console.log(dayOff);

    let result = {
        "type": "bubble",
        "header": {
          "contents": [
            {
              "contents": [
                {
                  "aspectMode": "cover",
                  "aspectRatio": "150:196",
                  "flex": 1,
                  "gravity": "center",
                  "size": "full",
                  "type": "image",
                  "url": "https://lh3.googleusercontent.com/p/AF1QipP5h5-l_bPGxSaPyADEnkyHmuY3xYlYKlcPZEST=s1360-w1360-h1020"
                },
                {
                  "contents": [
                    {
                      "aspectMode": "cover",
                      "aspectRatio": "150:98",
                      "gravity": "center",
                      "size": "full",
                      "type": "image",
                      "url": "https://lh3.googleusercontent.com/p/AF1QipODuxRFQA5ic-0U4IrwxVlJBfWxt6A8hnzZEZxU=s1360-w1360-h1020"
                    },
                    {
                      "aspectMode": "cover",
                      "aspectRatio": "150:98",
                      "gravity": "center",
                      "size": "full",
                      "type": "image",
                      "url": "https://lh3.googleusercontent.com/p/AF1QipMUq6nCU2RaD4eVkF4l9CDSDYi01XgDIcD8gsXn=s1360-w1360-h1020"
                    }
                  ],
                  "flex": 1,
                  "layout": "vertical",
                  "type": "box"
                },
                {
                  "backgroundColor": "#b9a18e",
                  "contents": [
                    {
                      "align": "center",
                      "color": "#f8f5f3",
                      "gravity": "center",
                      "margin": "sm",
                      "size": "md",
                      "text": "ตอนนี้ร้านเปิดไหม? : " + `${data.isOpenToday}`,
                      "type": "text"
                    }
                  ],
                  "cornerRadius": "100px",
                  "flex": 0,
                  "layout": "horizontal",
                  "margin": "xs",
                  "offsetStart": "18px",
                  "offsetTop": "18px",
                  "paddingAll": "2px",
                  "paddingEnd": "4px",
                  "paddingStart": "4px",
                  "position": "absolute",
                  "type": "box"
                }
              ],
              "layout": "horizontal",
              "type": "box"
            }
          ],
          "layout": "vertical",
          "paddingAll": "0px",
          "type": "box"
        },
        "body": {
          "backgroundColor": "#b29782",
          "contents": [
            {
              "contents": [
                {
                  "contents": [
                    {
                      "color": "#ffffff",
                      "contents": [],
                      "size": "lg",
                      "text": "ศูนย์นวดแผนไทยหนองป่าครั่ง",
                      "type": "text",
                      "weight": "bold",
                      "wrap": true
                    },
                    {
                      "action": {
                        "label": "action",
                        "type": "uri",
                        "uri": "https://www.google.com/maps/place/%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%99%E0%B8%A7%E0%B8%94+%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87/@18.7864789,99.0338743,15z/data=!4m6!3m5!1s0x30da255dbcf731fd:0xa940988656a60588!8m2!3d18.7864789!4d99.0338743!16s%2Fg%2F11fzzknqpp"
                      },
                      "color": "#ffffffcc",
                      "size": "sm",
                      "text": "150 เชียงใหม่ (ห่างจาก ถนน ไฮเวย์เชียงใหม่ ลำปาง 400 เมตร ตรงข้ามร้านสุกีร้อนแรง) ",
                      "type": "text",
                      "wrap": true
                    }
                  ],
                  "layout": "vertical",
                  "spacing": "sm",
                  "type": "box"
                },
                {
                  "backgroundColor": "#ffffff1A",
                  "contents": [
                    {
                      "contents": [
                        {
                          "color": "#ffffffde",
                          "contents": [],
                          "margin": "lg",
                          "size": "sm",
                          "text": `เวลาทำการ : ${data.openAtTime} น. - ${data.closeAtTime} น.`,
                          "type": "text",
                          "wrap": true
                        },
                        {
                          "color": "#ffffffde",
                          "contents": [],
                          "margin": "lg",
                          "size": "sm",
                          "text": `หยุดทุกวัน : ${dayOff}`,
                          "type": "text",
                          "wrap": true
                        }
                      ],
                      "layout": "vertical",
                      "paddingAll": "md",
                      "type": "box"
                    }
                  ],
                  "cornerRadius": "2px",
                  "layout": "vertical",
                  "margin": "md",
                  "paddingAll": "none",
                  "type": "box"
                }
              ],
              "layout": "vertical",
              "type": "box"
            }
          ],
          "layout": "vertical",
          "paddingAll": "20px",
          "type": "box"
        }
      };

    // let result = {
    //     type: "text",
    //     text: data.openAtTime
    // }

    return result;
  } catch (error) {

    console.error(error);
    return;
  }
}

module.exports = {intentOpenClose};
