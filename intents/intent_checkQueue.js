const axios = require("axios");
const api_token = process.env.API_TOKEN;
const api_url = process.env.API_URL;


exports.intentCheckQueue = async function intentCheckQueue() {
    try {
        // const response = await axios.get(`${api_url}/checkOpenStatus`, {
        //     headers: {
        //         Authorization: `Bearer ${api_token}`,
        //     },
        // });

        // const data = response.data;
        // console.log(data);

        let content = {
            "type": "bubble",
            "body": {
                "backgroundColor": "#16A085",
                "contents": [
                    {
                        "align": "center",
                        "color": "#FDFEFE",
                        "gravity": "center",
                        "size": "xl",
                        "text": "บัตรคิว",
                        "type": "text",
                        "weight": "bold",
                        "wrap": true
                    },
                    {
                        "contents": [
                            {
                                "contents": [
                                    {
                                        "color": "#FDFEFE",
                                        "flex": 2,
                                        "size": "sm",
                                        "text": "ชื่อ",
                                        "type": "text"
                                    },
                                    {
                                        "color": "#FDFEFE",
                                        "flex": 4,
                                        "size": "sm",
                                        "text": "<<ชื่อลูกค้า>>",
                                        "type": "text",
                                        "wrap": true
                                    }
                                ],
                                "layout": "baseline",
                                "spacing": "sm",
                                "type": "box"
                            },
                            {
                                "contents": [
                                    {
                                        "color": "#FDFEFE",
                                        "flex": 2,
                                        "size": "sm",
                                        "text": "วันที่",
                                        "type": "text"
                                    },
                                    {
                                        "color": "#FDFEFE",
                                        "flex": 4,
                                        "size": "sm",
                                        "text": "<<วันที่>>",
                                        "type": "text",
                                        "wrap": true
                                    }
                                ],
                                "layout": "baseline",
                                "spacing": "sm",
                                "type": "box"
                            },
                            {
                                "contents": [
                                    {
                                        "color": "#FDFEFE",
                                        "flex": 2,
                                        "size": "sm",
                                        "text": "เวลา",
                                        "type": "text"
                                    },
                                    {
                                        "color": "#FDFEFE",
                                        "flex": 4,
                                        "size": "sm",
                                        "text": "<<เวลา>> น.",
                                        "type": "text",
                                        "wrap": true
                                    }
                                ],
                                "layout": "baseline",
                                "spacing": "sm",
                                "type": "box"
                            }
                        ],
                        "layout": "vertical",
                        "margin": "lg",
                        "spacing": "sm",
                        "type": "box"
                    },
                    {
                        "alignItems": "center",
                        "contents": [
                            {
                                "align": "center",
                                "color": "#FDFEFE",
                                "size": "4xl",
                                "text": "เตียง 9",
                                "type": "text",
                                "weight": "bold"
                            },
                            {
                                "color": "#FDFEFE",
                                "text": "ห้องราตรี",
                                "type": "text",
                                "weight": "bold"
                            },
                            {
                                "align": "center",
                                "color": "#FDFEFE",
                                "margin": "xxl",
                                "size": "xs",
                                "text": "กรุณาไปถึงสถานที่ก่อนเวลานัด 5 นาที \nโชว์คิวนี้ให้แก่เจ้าหน้าที่เมื่อไปถึง",
                                "type": "text",
                                "wrap": true
                            }
                        ],
                        "justifyContent": "center",
                        "layout": "vertical",
                        "margin": "xxl",
                        "type": "box"
                    }
                ],
                "layout": "vertical",
                "spacing": "md",
                "type": "box"
            }
        };

        let result = {
            "type": "flex",
            "altText": "queue_card",
            "contents": content
        };
        return result;
    }
    catch (err) {
        console.error(error);
        return;
    }
}