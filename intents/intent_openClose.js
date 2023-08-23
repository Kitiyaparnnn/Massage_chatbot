const axios = require("axios");
const api_token = process.env.API_TOKEN;
const api_url = process.env.API_URL;

async function intentOpenClose() {
  console.log("intent: open-close");
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
    
    let contents = {
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
                        "uri": "https://goo.gl/maps/H9zUARJpHMJbXzyi8"
                      },
                      "color": "#ffffffcc",
                      "size": "sm",
                      "text": "ข้างโรงพยาบาลเทศบาลหนองป่าครั่ง ตำบลหนองป่าครั่ง อำเภอเมืองเชียงใหม่ เชียงใหม่ 50000",
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

    let result = {
        "type": "flex",
        "altText": "openClose_card",
        "contents": contents
    }
    
    return result;
  } catch (error) {
    // console.log(error.message);
    console.error(error);
    return;
  }
}

module.exports = {intentOpenClose};
