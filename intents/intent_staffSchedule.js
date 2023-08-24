exports.intentStaffSchedule = async function intentStaffSchedule(userId) {
    console.log("intent: staff schedule");
    console.log(`userId: ${userId}`);
    try {
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
        for (var i = 1; i <= 25; i++) {
            let row1 = {
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
            let row2 = {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                    {
                        "type": "text",
                        "text": `${25 + i}`,
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
                        "contents": col1,
                        "cornerRadius": "30px",
                        "layout": "vertical",
                        "type": "box",
                        "position": "relative"
                    },
                    {
                        "contents":col2,
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

        let bubble = {
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
                            },
                            {
                                "contents": [
                                    {
                                        "align": "center",
                                        "text": "1",
                                        "type": "text"
                                    },
                                    {
                                        "align": "center",
                                        "text": "เบอร์",
                                        "type": "text"
                                    }
                                ],
                                "layout": "horizontal",
                                "margin": "xs",
                                "type": "box"
                            },
                            {
                                "contents": [
                                    {
                                        "align": "center",
                                        "text": "2",
                                        "type": "text"
                                    },
                                    {
                                        "align": "center",
                                        "text": "เบอร์",
                                        "type": "text"
                                    }
                                ],
                                "layout": "horizontal",
                                "margin": "xs",
                                "type": "box"
                            },
                            {
                                "contents": [
                                    {
                                        "align": "center",
                                        "text": "3",
                                        "type": "text"
                                    },
                                    {
                                        "align": "center",
                                        "text": "เบอร์",
                                        "type": "text"
                                    }
                                ],
                                "layout": "horizontal",
                                "margin": "xs",
                                "type": "box"
                            },
                            {
                                "contents": [
                                    {
                                        "align": "center",
                                        "text": "4",
                                        "type": "text"
                                    },
                                    {
                                        "align": "center",
                                        "text": "เบอร์",
                                        "type": "text"
                                    }
                                ],
                                "layout": "horizontal",
                                "margin": "xs",
                                "type": "box"
                            },
                            {
                                "contents": [
                                    {
                                        "align": "center",
                                        "text": "5",
                                        "type": "text"
                                    },
                                    {
                                        "align": "center",
                                        "text": "เบอร์",
                                        "type": "text"
                                    }
                                ],
                                "layout": "horizontal",
                                "margin": "xs",
                                "type": "box"
                            }
                        ],
                        "cornerRadius": "30px",
                        "layout": "vertical",
                        "position": "relative",
                        "type": "box"
                    },
                    {
                        "contents": [
                            {
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
                            },
                            {
                                "contents": [
                                    {
                                        "align": "center",
                                        "text": "1",
                                        "type": "text"
                                    },
                                    {
                                        "align": "center",
                                        "text": "เบอร์",
                                        "type": "text"
                                    }
                                ],
                                "layout": "horizontal",
                                "margin": "xs",
                                "type": "box"
                            },
                            {
                                "contents": [
                                    {
                                        "align": "center",
                                        "text": "2",
                                        "type": "text"
                                    },
                                    {
                                        "align": "center",
                                        "text": "เบอร์",
                                        "type": "text"
                                    }
                                ],
                                "layout": "horizontal",
                                "margin": "xs",
                                "type": "box"
                            },
                            {
                                "contents": [
                                    {
                                        "align": "center",
                                        "text": "3",
                                        "type": "text"
                                    },
                                    {
                                        "align": "center",
                                        "text": "เบอร์",
                                        "type": "text"
                                    }
                                ],
                                "layout": "horizontal",
                                "margin": "xs",
                                "type": "box"
                            },
                            {
                                "contents": [
                                    {
                                        "align": "center",
                                        "text": "4",
                                        "type": "text"
                                    },
                                    {
                                        "align": "center",
                                        "text": "เบอร์",
                                        "type": "text"
                                    }
                                ],
                                "layout": "horizontal",
                                "margin": "xs",
                                "type": "box"
                            },
                            {
                                "contents": [
                                    {
                                        "align": "center",
                                        "text": "5",
                                        "type": "text"
                                    },
                                    {
                                        "align": "center",
                                        "text": "เบอร์",
                                        "type": "text"
                                    }
                                ],
                                "layout": "horizontal",
                                "margin": "xs",
                                "type": "box"
                            }
                        ],
                        "cornerRadius": "30px",
                        "layout": "vertical",
                        "position": "relative",
                        "type": "box"
                    }
                ],
                "layout": "horizontal",
                "type": "box"
            }
        };

        let result = {
            "type": "flex",
            "altText": "schedule_card",
            "contents": content
        }

        return result;
    } catch (error) {
        console.error(error);
    }
}