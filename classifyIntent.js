const { intentOpenClose } = require('./intents/intent_openClose');
const { intentMassagePlans } = require('./intents/intent_massagePlans');
const {defaultMessage} = require("./intents/default")
const {info_button} = require("./components/info_button")
const {intentReservation} = require('./intents/intent_reservation')
const {intentCheckQueue} = require('./intents/intent_checkQueue')

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
            "เปิดวันไหนบ้าง",
            "วันนี้ร้านเปิดไหม",
            "วันเปิดปิด"];
    let ask_massagePlans =
        ["เมนูนวด",
            "มีนวดอะไรบ้าง",
            "นวดครั้งละเท่าไหร่",
            "มีนวดแผนอะไรบ้าง",
            "แผนการนวด",
            "แผนนวด",
            "ค่าบริการแผนนวด"];
    let ask_infos = ["สอบถามข้อมูล"];
    let ask_toreserve = ["ระบบจองคิว"];
    let ask_checkQueue = ["ตรวจสอบคิว"]


    console.log("stage: classify");

    if (ask_openClose.includes(msg)) return await intentOpenClose();
    else if (ask_massagePlans.includes(msg)) return await intentMassagePlans();
    else if (ask_infos.includes(msg)) return info_button();
    else if (ask_toreserve.includes(msg)) return intentReservation();
    else if (ask_checkQueue.includes(msg)) return intentCheckQueue();
    else return defaultMessage();


}

module.exports = { classifyIntent };
