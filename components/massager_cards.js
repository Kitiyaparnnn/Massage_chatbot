exports.massager_cards = function massager_cards() {
  let content = {
    type: "carousel",
    contents: [
      {
        body: {
          contents: [
            {
              aspectMode: "cover",
              aspectRatio: "2:3",
              gravity: "top",
              size: "full",
              type: "image",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg",
            },
            {
              backgroundColor: "#282a2bcc",
              contents: [
                {
                  contents: [
                    {
                      color: "#ffffff",
                      size: "xl",
                      text: "หมอนวดคนที่ 1",
                      type: "text",
                      weight: "bold",
                    },
                  ],
                  layout: "vertical",
                  type: "box",
                },
                {
                  contents: [
                    {
                      color: "#ebebeb",
                      flex: 0,
                      size: "sm",
                      text: "สถานะวันนี้ :",
                      type: "text",
                    },
                    {
                      color: "#ffffffcc",
                      flex: 0,
                      gravity: "bottom",
                      size: "sm",
                      text: "มาทำงาน",
                      type: "text",
                    },
                  ],
                  layout: "baseline",
                  spacing: "lg",
                  type: "box",
                },
                {
                  contents: [
                    {
                      alignItems: "center",
                      backgroundColor: "#6e944d",
                      contents: [
                        {
                          align: "center",
                          color: "#ffffff",
                          gravity: "center",
                          text: "09:00",
                          type: "text",
                        },
                      ],
                      cornerRadius: "20px",
                      height: "25px",
                      justifyContent: "center",
                      layout: "vertical",
                      type: "box",
                      width: "53px",
                    },
                    {
                      alignItems: "center",
                      backgroundColor: "#6e944d",
                      contents: [
                        {
                          align: "center",
                          color: "#ffffff",
                          text: "11:00",
                          type: "text",
                        },
                      ],
                      cornerRadius: "20px",
                      height: "25px",
                      justifyContent: "center",
                      layout: "vertical",
                      type: "box",
                      width: "53px",
                    },
                    {
                      alignItems: "center",
                      backgroundColor: "#6e944d",
                      contents: [
                        {
                          align: "center",
                          color: "#ffffff",
                          text: "13:00",
                          type: "text",
                        },
                      ],
                      cornerRadius: "20px",
                      height: "25px",
                      justifyContent: "center",
                      layout: "vertical",
                      type: "box",
                      width: "53px",
                    },
                  ],
                  layout: "horizontal",
                  paddingAll: "xs",
                  spacing: "lg",
                  type: "box",
                },
                {
                  action: {
                    data: "1",
                    displayText: "กรอกข้อมูลเพื่อจองคิว",
                    label: "จองคิว",
                    type: "postback",
                  },
                  borderColor: "#ffffff",
                  borderWidth: "1px",
                  contents: [
                    {
                      type: "filler",
                    },
                    {
                      contents: [
                        {
                          type: "filler",
                        },
                        {
                          color: "#ffffff",
                          flex: 0,
                          offsetTop: "-2px",
                          text: "จองคิว",
                          type: "text",
                        },
                        {
                          type: "filler",
                        },
                      ],
                      layout: "baseline",
                      spacing: "sm",
                      type: "box",
                    },
                    {
                      type: "filler",
                    },
                  ],
                  cornerRadius: "4px",
                  height: "40px",
                  layout: "vertical",
                  margin: "xxl",
                  spacing: "sm",
                  type: "box",
                },
              ],
              layout: "vertical",
              offsetBottom: "0px",
              offsetEnd: "0px",
              offsetStart: "0px",
              paddingAll: "20px",
              paddingTop: "18px",
              position: "absolute",
              type: "box",
            },
          ],
          layout: "vertical",
          paddingAll: "0px",
          type: "box",
        },
        type: "bubble",
      },
      {
        body: {
          contents: [
            {
              aspectMode: "cover",
              aspectRatio: "2:3",
              gravity: "top",
              size: "full",
              type: "image",
              url: "https://www.bloggang.com/data/a/amnicha/picture/1408597004.jpg",
            },
            {
              backgroundColor: "#282a2bcc",
              contents: [
                {
                  contents: [
                    {
                      color: "#ffffff",
                      size: "xl",
                      text: "หมอนวดคนที่ 2",
                      type: "text",
                      weight: "bold",
                    },
                  ],
                  layout: "vertical",
                  type: "box",
                },
                {
                  contents: [
                    {
                      color: "#ebebeb",
                      flex: 0,
                      size: "sm",
                      text: "สถานะวันนี้ :",
                      type: "text",
                    },
                    {
                      color: "#ffffffcc",
                      flex: 0,
                      gravity: "bottom",
                      size: "sm",
                      text: "มาทำงาน",
                      type: "text",
                    },
                  ],
                  layout: "baseline",
                  spacing: "lg",
                  type: "box",
                },
                {
                  contents: [
                    {
                      alignItems: "center",
                      backgroundColor: "#6e944d",
                      contents: [
                        {
                          align: "center",
                          color: "#ffffff",
                          text: "09:00",
                          type: "text",
                        },
                      ],
                      cornerRadius: "20px",
                      height: "25px",
                      justifyContent: "center",
                      layout: "vertical",
                      type: "box",
                      width: "53px",
                    },
                    {
                      alignItems: "center",
                      backgroundColor: "#6e944d",
                      contents: [
                        {
                          align: "center",
                          color: "#ffffff",
                          text: "11:00",
                          type: "text",
                        },
                      ],
                      cornerRadius: "20px",
                      height: "25px",
                      justifyContent: "center",
                      layout: "vertical",
                      type: "box",
                      width: "53px",
                    },
                    {
                      alignItems: "center",
                      backgroundColor: "#6e944d",
                      contents: [
                        {
                          align: "center",
                          color: "#ffffff",
                          text: "13:00",
                          type: "text",
                        },
                      ],
                      cornerRadius: "20px",
                      height: "25px",
                      justifyContent: "center",
                      layout: "vertical",
                      type: "box",
                      width: "53px",
                    },
                  ],
                  layout: "horizontal",
                  paddingAll: "xs",
                  spacing: "lg",
                  type: "box",
                },
                {
                  borderColor: "#ffffff",
                  borderWidth: "1px",
                  contents: [
                    {
                      type: "filler",
                    },
                    {
                      contents: [
                        {
                          type: "filler",
                        },
                        {
                          color: "#ffffff",
                          flex: 0,
                          offsetTop: "-2px",
                          text: "จองคิว",
                          type: "text",
                        },
                        {
                          type: "filler",
                        },
                      ],
                      layout: "baseline",
                      spacing: "sm",
                      type: "box",
                    },
                    {
                      type: "filler",
                    },
                  ],
                  cornerRadius: "4px",
                  height: "40px",
                  layout: "vertical",
                  margin: "xxl",
                  spacing: "sm",
                  type: "box",
                },
              ],
              layout: "vertical",
              offsetBottom: "0px",
              offsetEnd: "0px",
              offsetStart: "0px",
              paddingAll: "20px",
              paddingTop: "18px",
              position: "absolute",
              type: "box",
            },
          ],
          layout: "vertical",
          paddingAll: "0px",
          type: "box",
        },
        type: "bubble",
      },
    ],
  };

  let result = {
    type: "flex",
    altText: "massager_cards",
    contents: content,
  };

  return result;
};
