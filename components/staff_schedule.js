const axios = require("axios");
const api_token = process.env.API_TOKEN;
const api_url = process.env.API_URL;

exports.staff_schedule = async function staff_schedule(masseuseNo) {

    try {
        //get schedule data from SERVER API
        // const response = await axios.get(`${api_url}/checkOpenStatus`, {
        //     headers: {
        //         Authorization: `Bearer ${api_token}`,
        //     },
        // });

        // const data = response.data;
        // console.log(data);

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
                    "color": "#0367D3",
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
                    "color": "#0367D3",
                    "text": "เบอร์",
                    "type": "text",
                    "weight": "bold"
                }
            ],
            "layout": "horizontal",
            "margin": "xs",
            "type": "box"
        }];
        for (var i = 1; i <= 50; i++) {
            let row;
            if (masseuseNo == i) {
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
                            "text": "เบอร์",
                            "align": "center",
                            "color": "#0367D3"
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
                            "text": "เบอร์",
                            "align": "center",

                        }
                    ],
                    "margin": "xs"
                };
            }

            if (i <= 25) col1.push(row1);
            else col2.push(row2);
        }

        let content = {
            "type": "bubble",
            "header": {
                "backgroundColor": "#0367D3",
                "contents": [
                    {
                        "contents": [
                            {
                                "color": "#ffffff66",
                                "size": "sm",
                                "text": "ตารางงานวันที่ ",
                                "type": "text"
                            },
                            {
                                "color": "#ffffff",
                                "flex": 4,
                                "size": "xl",
                                "text": "<<วันที่>>",
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


        let result = {
            "type": "flex",
            "altText": "schedule_card",
            "contents": content
        }

        return result;
    } catch (error) {

    }
}