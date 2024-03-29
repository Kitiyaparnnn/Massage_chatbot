const axios = require("axios");
const api_token = process.env.API_TOKEN;
const api_url = process.env.API_URL;

exports.staff_schedule = async function staff_schedule(schedule) {
    // console.log('schedule: ', schedule.queue[0].isMe);
    try {
        let col1 = [{
            "contents": [
                {
                    "align": "center",
                    "text": "คิว",
                    "type": "text",
                    "weight": "bold"
                },
                {
                    "align": "center",
                    "text": "เบอร์",
                    "type": "text",
                    "weight": "bold"
                }
            ],
            "layout": "horizontal",
            "margin": "xs",
            "type": "box"
        }], col2 = [{
            "contents": [
                {
                    "align": "center",
                    "text": "คิว",
                    "type": "text",
                    "weight": "bold"
                },
                {
                    "align": "center",
                    "text": "เบอร์",
                    "type": "text",
                    "weight": "bold"
                }
            ],
            "layout": "horizontal",
            "margin": "xs",
            "type": "box"
        }];
        for (var i = 1; i <= schedule.queue.length; i++) {
            let row;
            let isQueue = schedule.queue[i - 1] == undefined ? false : schedule.queue[i - 1].isMe;
            console.log('isQueue: ', isQueue);
            if (isQueue == true) {
                row = {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "text",
                            "text": `${i}`,
                            "align": "center",
                            "color": "#0367D3",
                            "weight": "bold"
                        },
                        {
                            "type": "text",
                            "text": `#${schedule.queue[i - 1].massagerNo}`,
                            "align": "center",
                            "color": "#0367D3",
                            "weight": "bold"
                        }
                    ],
                    "margin": "xs"
                };
            }
            else {
                row = {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "text",
                            "text": `${i}`,
                            "align": "center"
                        },
                        {
                            "type": "text",
                            "text": `${schedule.queue[i - 1] === undefined ? ' ' : '#' + schedule.queue[i - 1].massagerNo}`,
                            "align": "center",
                        }
                    ],
                    "margin": "xs"
                };
            }

            if (i <= 25) col1.push(row);
            else col2.push(row);
        }

        let content1 = {
            "type": "bubble",
            "header": {
                "backgroundColor": "#0367D3",
                "contents": [
                    {
                        "contents": [
                            {
                                "color": "#ffffff66",
                                "size": "sm",
                                "text": "ข้อมูลคิวงานวันนี้ ",
                                "type": "text"
                            },
                            {
                                "color": "#ffffff",
                                "flex": 4,
                                "size": "xl",
                                "text": `${schedule.date}`,
                                "type": "text",
                                "weight": "bold"
                            }
                        ],
                        "layout": "vertical",
                        "type": "box"
                    }
                ],
                "layout": "vertical",
                "paddingAll": "20px",
                "paddingTop": "22px",
                "spacing": "xs",
                "type": "box"
            },
            "body": {
                "contents": [
                    {
                        "contents": col1,
                        "cornerRadius": "30px",
                        "layout": "vertical",
                        "type": "box",
                        "position": "relative"
                    }
                ],
                "layout": "horizontal",
                "type": "box"
            }

        }

        let content2 = {
            "type": "bubble",
            "header": {
                "backgroundColor": "#0367D3",
                "contents": [
                    {
                        "contents": [
                            {
                                "color": "#ffffff66",
                                "size": "sm",
                                "text": "ข้อมูลคิวงานวันนี้ ",
                                "type": "text"
                            },
                            {
                                "color": "#ffffff",
                                "flex": 4,
                                "size": "xl",
                                "text": `${schedule.date}`,
                                "type": "text",
                                "weight": "bold"
                            }
                        ],
                        "layout": "vertical",
                        "type": "box"
                    }
                ],
                "layout": "vertical",
                "paddingAll": "20px",
                "paddingTop": "22px",
                "spacing": "xs",
                "type": "box"
            },
            "body": {
                "contents": [
                    {
                        "contents": col1,
                        "cornerRadius": "30px",
                        "layout": "vertical",
                        "type": "box",
                        "position": "relative"
                    },
                    {
                        "contents": col2,
                        "cornerRadius": "30px",
                        "layout": "vertical",
                        "type": "box",
                        "position": "relative"
                    }
                ],
                "layout": "horizontal",
                "type": "box"
            }

        }

        let content = schedule.queue.length < 25 ? content1 : content2;
        let result = {
            "type": "flex",
            "altText": "schedule_card",
            "contents": content
        }
        return result;
    } catch (error) {
        console.log(error);
        let errorMessage = {
            "type": "text",
            "text": "ขออภัย มีข้อผิดพลาดในการดึงข้อมูล โปรดลองอีกครั้งในภายหลัง"
          };
        return errorMessage;
    }
}