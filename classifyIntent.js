const { intentOpenClose } = require('./intents/intent_openClose');
const { intentMassagePlans } = require('./intents/intent_massagePlans');
const {defaultMessage} = require("./intents/default")

async function classifyIntent(msg) {
    let ask_openClose =
        ["เวลาเปิดปิด",
            "วันนี้เปิดไหม",
            "เวลาทำการ",
            "ร้านเปิดปิดอย่างไร?",
            "ร้านเปิดทำการวันไหนบ้าง",
            "ร้านปิดวันอาทิตย์ไหม?",
            "ร้านเปิดทุกวันรึเปล่า",
            "เปิดทุกวันไหม",
            "เปิดวันไหน?",
            "เปิดวันไหนบ้าง"];
    let ask_massagePlans =
        ["เมนูนวด",
            "มีนวดอะไรบ้าง",
            "นวดครั้งละเท่าไหร่",
            "มีนวดแผนอะไรบ้าง",
            "แผนการนวด",
            "แผนนวด"];

    console.log("into: classify");

    if (ask_openClose.includes(msg)) return await intentOpenClose();
    else if (ask_massagePlans.includes(msg)) return await intentMassagePlans();
    else return defaultMessage();


}

module.exports = { classifyIntent };
