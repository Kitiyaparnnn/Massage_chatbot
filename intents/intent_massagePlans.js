const axios = require("axios");
const api_token = process.env.API_TOKEN;
const api_url = process.env.API_URL;

async function intentMassagePlans() {
    try {
        const response = await axios.get(`${api_url}/checkMassagePlans`, {
            headers: {
                Authorization: `Bearer ${api_token}`,
            },
        });

        const data = response.data;
        console.log(data);

        let cards = [];
        await data.massagePlans.forEach(e => {
            let card = {
                "contents": [
                    {
                        "flex": 3,
                        "margin": "xs",
                        "text": e.plan,
                        "type": "text",
                        "weight": "bold",
                        "wrap": true
                    },
                    {
                        "align": "end",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "text": `${e.price}`,
                        "type": "text"
                    }
                ],
                "layout": "baseline",
                "type": "box"
            };
            cards.push(card);
        });

        let contents = {
            "type": "bubble",
            "body": {
                "contents": [
                    {
                        "size": "xl",
                        "text": "ค่าบริการนวดรูปแบบต่างๆ",
                        "type": "text",
                        "weight": "bold"
                    },
                    {
                        "contents": 
                            cards
                        ,
                        "layout": "vertical",
                        "spacing": "sm",
                        "type": "box"
                    },
                    {
                        "color": "#aaaaaa",
                        "size": "xxs",
                        "text": `ราคานี้อัพเดตเมื่อ ${data.updatedAt} `,
                        "type": "text",
                        "wrap": true
                    }
                ],
                "layout": "vertical",
                "spacing": "md",
                "type": "box"
            },
            "hero": {
                "aspectMode": "cover",
                "aspectRatio": "20:13",
                "size": "full",
                "type": "image",
                "url": "https://www.khaosod.co.th/wpapp/uploads/2022/05/4-7.jpg"
            }
        };

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

module.exports = { intentMassagePlans };