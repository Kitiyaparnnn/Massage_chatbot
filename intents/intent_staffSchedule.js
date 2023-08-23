exports.intentStaffSchedule = async function intentStaffSchedule() {
    console.log("intent: staff schedule");
    try {
        // const response = await axios.get(`${api_url}/checkOpenStatus`, {
        //     headers: {
        //         Authorization: `Bearer ${api_token}`,
        //     },
        // });

        // const data = response.data;
        // console.log(data);

        let col1 = [], col2 = [];
        for (var i = 1; i <= 25; i++) {
            let row1 = {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                    {
                        "type": "text",
                        "text": i,
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
            let row2 = {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                    {
                        "type": "text",
                        "text": 25 + i,
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
            col1.push(row1);
            col2.push(row2);
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
                        "contents": [
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "คิว",
                                        "align": "center",
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "text",
                                        "text": "เบอร์",
                                        "align": "center",
                                        "weight": "bold",
                                        "color": "#0367D3"
                                    }
                                ],
                                "margin": "xs"
                            },
                            col1
                        ],
                        "cornerRadius": "30px",
                        "layout": "vertical",
                        "type": "box",
                        "position": "relative"
                    },
                    {
                        "contents": [
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "คิว",
                                        "align": "center",
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "text",
                                        "text": "เบอร์",
                                        "align": "center",
                                        "weight": "bold",
                                        "color": "#0367D3"
                                    }
                                ],
                                "margin": "xs"
                            },
                            col2
                        ],
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
            "altText": "massagePlans_card",
            "contents": contents
        }
        
        return result;
    } catch (error) {
        console.error(error);
    }
}