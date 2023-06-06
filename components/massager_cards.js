exports.massager_cards = function massager_cards(){
    // let result = {
    //     "type": "carousel",
    //     "contents": [
    //       {
    //         "body": {
    //           "contents": [
    //             {
    //               "aspectMode": "cover",
    //               "aspectRatio": "2:3",
    //               "gravity": "top",
    //               "size": "full",
    //               "type": "image",
    //               "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg"
    //             },
    //             {
    //               "backgroundColor": "#282a2bcc",
    //               "contents": [
    //                 {
    //                   "contents": [
    //                     {
    //                       "color": "#ffffff",
    //                       "size": "xl",
    //                       "text": "หมอนวดคนที่ 1",
    //                       "type": "text",
    //                       "weight": "bold"
    //                     }
    //                   ],
    //                   "layout": "vertical",
    //                   "type": "box"
    //                 },
    //                 {
    //                   "contents": [
    //                     {
    //                       "color": "#ebebeb",
    //                       "flex": 0,
    //                       "size": "sm",
    //                       "text": "สถานะวันนี้ :",
    //                       "type": "text"
    //                     },
    //                     {
    //                       "color": "#ffffffcc",
    //                       "flex": 0,
    //                       "gravity": "bottom",
    //                       "size": "sm",
    //                       "text": "มาทำงาน",
    //                       "type": "text"
    //                     }
    //                   ],
    //                   "layout": "baseline",
    //                   "spacing": "lg",
    //                   "type": "box"
    //                 },
    //                 {
    //                   "contents": [
    //                     {
    //                       "alignItems": "center",
    //                       "backgroundColor": "#6e944d",
    //                       "contents": [
    //                         {
    //                           "align": "center",
    //                           "color": "#ffffff",
    //                           "gravity": "center",
    //                           "text": "09:00",
    //                           "type": "text"
    //                         }
    //                       ],
    //                       "cornerRadius": "20px",
    //                       "height": "25px",
    //                       "justifyContent": "center",
    //                       "layout": "vertical",
    //                       "type": "box",
    //                       "width": "53px"
    //                     },
    //                     {
    //                       "alignItems": "center",
    //                       "backgroundColor": "#6e944d",
    //                       "contents": [
    //                         {
    //                           "align": "center",
    //                           "color": "#ffffff",
    //                           "text": "11:00",
    //                           "type": "text"
    //                         }
    //                       ],
    //                       "cornerRadius": "20px",
    //                       "height": "25px",
    //                       "justifyContent": "center",
    //                       "layout": "vertical",
    //                       "type": "box",
    //                       "width": "53px"
    //                     },
    //                     {
    //                       "alignItems": "center",
    //                       "backgroundColor": "#6e944d",
    //                       "contents": [
    //                         {
    //                           "align": "center",
    //                           "color": "#ffffff",
    //                           "text": "13:00",
    //                           "type": "text"
    //                         }
    //                       ],
    //                       "cornerRadius": "20px",
    //                       "height": "25px",
    //                       "justifyContent": "center",
    //                       "layout": "vertical",
    //                       "type": "box",
    //                       "width": "53px"
    //                     }
    //                   ],
    //                   "layout": "horizontal",
    //                   "paddingAll": "xs",
    //                   "spacing": "lg",
    //                   "type": "box"
    //                 },
    //                 {
    //                   "action": {
    //                     "data": "1",
    //                     "displayText": "กรอกข้อมูลเพื่อจองคิว",
    //                     "label": "จองคิว",
    //                     "type": "postback"
    //                   },
    //                   "borderColor": "#ffffff",
    //                   "borderWidth": "1px",
    //                   "contents": [
    //                     {
    //                       "type": "filler"
    //                     },
    //                     {
    //                       "contents": [
    //                         {
    //                           "type": "filler"
    //                         },
    //                         {
    //                           "color": "#ffffff",
    //                           "flex": 0,
    //                           "offsetTop": "-2px",
    //                           "text": "จองคิว",
    //                           "type": "text"
    //                         },
    //                         {
    //                           "type": "filler"
    //                         }
    //                       ],
    //                       "layout": "baseline",
    //                       "spacing": "sm",
    //                       "type": "box"
    //                     },
    //                     {
    //                       "type": "filler"
    //                     }
    //                   ],
    //                   "cornerRadius": "4px",
    //                   "height": "40px",
    //                   "layout": "vertical",
    //                   "margin": "xxl",
    //                   "spacing": "sm",
    //                   "type": "box"
    //                 }
    //               ],
    //               "layout": "vertical",
    //               "offsetBottom": "0px",
    //               "offsetEnd": "0px",
    //               "offsetStart": "0px",
    //               "paddingAll": "20px",
    //               "paddingTop": "18px",
    //               "position": "absolute",
    //               "type": "box"
    //             }
    //           ],
    //           "layout": "vertical",
    //           "paddingAll": "0px",
    //           "type": "box"
    //         },
    //         "type": "bubble"
    //       },
    //       {
    //         "body": {
    //           "contents": [
    //             {
    //               "aspectMode": "cover",
    //               "aspectRatio": "2:3",
    //               "gravity": "top",
    //               "size": "full",
    //               "type": "image",
    //               "url": "https://www.bloggang.com/data/a/amnicha/picture/1408597004.jpg"
    //             },
    //             {
    //               "backgroundColor": "#282a2bcc",
    //               "contents": [
    //                 {
    //                   "contents": [
    //                     {
    //                       "color": "#ffffff",
    //                       "size": "xl",
    //                       "text": "หมอนวดคนที่ 2",
    //                       "type": "text",
    //                       "weight": "bold"
    //                     }
    //                   ],
    //                   "layout": "vertical",
    //                   "type": "box"
    //                 },
    //                 {
    //                   "contents": [
    //                     {
    //                       "color": "#ebebeb",
    //                       "flex": 0,
    //                       "size": "sm",
    //                       "text": "สถานะวันนี้ :",
    //                       "type": "text"
    //                     },
    //                     {
    //                       "color": "#ffffffcc",
    //                       "flex": 0,
    //                       "gravity": "bottom",
    //                       "size": "sm",
    //                       "text": "มาทำงาน",
    //                       "type": "text"
    //                     }
    //                   ],
    //                   "layout": "baseline",
    //                   "spacing": "lg",
    //                   "type": "box"
    //                 },
    //                 {
    //                   "contents": [
    //                     {
    //                       "alignItems": "center",
    //                       "backgroundColor": "#6e944d",
    //                       "contents": [
    //                         {
    //                           "align": "center",
    //                           "color": "#ffffff",
    //                           "text": "09:00",
    //                           "type": "text"
    //                         }
    //                       ],
    //                       "cornerRadius": "20px",
    //                       "height": "25px",
    //                       "justifyContent": "center",
    //                       "layout": "vertical",
    //                       "type": "box",
    //                       "width": "53px"
    //                     },
    //                     {
    //                       "alignItems": "center",
    //                       "backgroundColor": "#6e944d",
    //                       "contents": [
    //                         {
    //                           "align": "center",
    //                           "color": "#ffffff",
    //                           "text": "11:00",
    //                           "type": "text"
    //                         }
    //                       ],
    //                       "cornerRadius": "20px",
    //                       "height": "25px",
    //                       "justifyContent": "center",
    //                       "layout": "vertical",
    //                       "type": "box",
    //                       "width": "53px"
    //                     },
    //                     {
    //                       "alignItems": "center",
    //                       "backgroundColor": "#6e944d",
    //                       "contents": [
    //                         {
    //                           "align": "center",
    //                           "color": "#ffffff",
    //                           "text": "13:00",
    //                           "type": "text"
    //                         }
    //                       ],
    //                       "cornerRadius": "20px",
    //                       "height": "25px",
    //                       "justifyContent": "center",
    //                       "layout": "vertical",
    //                       "type": "box",
    //                       "width": "53px"
    //                     }
    //                   ],
    //                   "layout": "horizontal",
    //                   "paddingAll": "xs",
    //                   "spacing": "lg",
    //                   "type": "box"
    //                 },
    //                 {
    //                   "borderColor": "#ffffff",
    //                   "borderWidth": "1px",
    //                   "contents": [
    //                     {
    //                       "type": "filler"
    //                     },
    //                     {
    //                       "contents": [
    //                         {
    //                           "type": "filler"
    //                         },
    //                         {
    //                           "color": "#ffffff",
    //                           "flex": 0,
    //                           "offsetTop": "-2px",
    //                           "text": "จองคิว",
    //                           "type": "text"
    //                         },
    //                         {
    //                           "type": "filler"
    //                         }
    //                       ],
    //                       "layout": "baseline",
    //                       "spacing": "sm",
    //                       "type": "box"
    //                     },
    //                     {
    //                       "type": "filler"
    //                     }
    //                   ],
    //                   "cornerRadius": "4px",
    //                   "height": "40px",
    //                   "layout": "vertical",
    //                   "margin": "xxl",
    //                   "spacing": "sm",
    //                   "type": "box"
    //                 }
    //               ],
    //               "layout": "vertical",
    //               "offsetBottom": "0px",
    //               "offsetEnd": "0px",
    //               "offsetStart": "0px",
    //               "paddingAll": "20px",
    //               "paddingTop": "18px",
    //               "position": "absolute",
    //               "type": "box"
    //             }
    //           ],
    //           "layout": "vertical",
    //           "paddingAll": "0px",
    //           "type": "box"
    //         },
    //         "type": "bubble"
    //       }
    //     ]
    //   };
    let result = {
        "type": "carousel",
        "contents": [
          {
            "type": "bubble",
            "size": "micro",
            "hero": {
              "type": "image",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg",
              "size": "full",
              "aspectMode": "cover",
              "aspectRatio": "320:213"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Brown Cafe",
                  "weight": "bold",
                  "size": "sm",
                  "wrap": true
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "icon",
                      "size": "xs",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "icon",
                      "size": "xs",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "icon",
                      "size": "xs",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "icon",
                      "size": "xs",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "icon",
                      "size": "xs",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                    },
                    {
                      "type": "text",
                      "text": "4.0",
                      "size": "xs",
                      "color": "#8c8c8c",
                      "margin": "md",
                      "flex": 0
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "baseline",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "東京旅行",
                          "wrap": true,
                          "color": "#8c8c8c",
                          "size": "xs",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                }
              ],
              "spacing": "sm",
              "paddingAll": "13px"
            }
          },
          {
            "type": "bubble",
            "size": "micro",
            "hero": {
              "type": "image",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip11.jpg",
              "size": "full",
              "aspectMode": "cover",
              "aspectRatio": "320:213"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Brow&Cony's Restaurant",
                  "weight": "bold",
                  "size": "sm",
                  "wrap": true
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "icon",
                      "size": "xs",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "icon",
                      "size": "xs",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "icon",
                      "size": "xs",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "icon",
                      "size": "xs",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "icon",
                      "size": "xs",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                    },
                    {
                      "type": "text",
                      "text": "4.0",
                      "size": "sm",
                      "color": "#8c8c8c",
                      "margin": "md",
                      "flex": 0
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "baseline",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "東京旅行",
                          "wrap": true,
                          "color": "#8c8c8c",
                          "size": "xs",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                }
              ],
              "spacing": "sm",
              "paddingAll": "13px"
            }
          },
          {
            "type": "bubble",
            "size": "micro",
            "hero": {
              "type": "image",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip12.jpg",
              "size": "full",
              "aspectMode": "cover",
              "aspectRatio": "320:213"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Tata",
                  "weight": "bold",
                  "size": "sm"
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "icon",
                      "size": "xs",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "icon",
                      "size": "xs",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "icon",
                      "size": "xs",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "icon",
                      "size": "xs",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "icon",
                      "size": "xs",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                    },
                    {
                      "type": "text",
                      "text": "4.0",
                      "size": "sm",
                      "color": "#8c8c8c",
                      "margin": "md",
                      "flex": 0
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "baseline",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "東京旅行",
                          "wrap": true,
                          "color": "#8c8c8c",
                          "size": "xs",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                }
              ],
              "spacing": "sm",
              "paddingAll": "13px"
            }
          }
        ]
      };

      return result;
}
