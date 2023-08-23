const { intentOpenClose } = require('./intents/intent_openClose');
const { intentMassagePlans } = require('./intents/intent_massagePlans');
const { defaultMessage } = require("./intents/default")
const { info_button } = require("./components/info_button")
const { intentReservation } = require('./intents/intent_reservation')
const { intentStaff } = require('./intents/intent_staff')
const { intentStaffSchedule } = require('./intents/intent_staffSchedule')
const { intentCheckQueue } = require('./intents/intent_checkQueue')
const { reserve_button } = require("./components/reserve_button");
const { massager_cards } = require('./components/massager_cards');


async function classifyIntent(msg, userId) {
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
            "วันเปิดปิด",
            "เวลาเปิด",
            "เวลาปิด",
            "เปิดกี่โมง",
            "ปิดกี่โมง",
            "เปิดวันไหน",
            "ปิดวันไหน",
            "ปิดวันไหนบ้าง"];
    let ask_massagePlans =
        ["เมนูนวด",
            "มีนวดอะไรบ้าง",
            "นวดครั้งละเท่าไหร่",
            "มีนวดแผนอะไรบ้าง",
            "แผนการนวด",
            "แผนนวด",
            "ค่าบริการแผนนวด",
            "ค่าบริการ",
            "ค่าบริการนวด",
            "ราคานวด",
            "ราคา",
            "มีบริการอะไรบ้าง",
            "บริการนวดแผนไทย"];
    let ask_infos = ["สอบถามข้อมูล"];
    let ask_toReserve = ["ระบบจองคิว", "จอง", "จองคิว", "ระบบจอง"];
    let ask_checkQueue = ["ตรวจสอบคิว", "คิวของฉัน", "คิว"];
    let ask_massager = ["ค้นหาหมอนวด"];
    let ask_staff = ["ติดต่อเจ้าหน้าที่", "เจ้าหน้าที่"];
    let ask_schedule = ["ตารางงาน", "ตารางการทำงาน", "ตารางทำงาน"]


    console.log("stage: classify");

    if (ask_openClose.includes(msg)) return await intentOpenClose();
    else if (ask_massagePlans.includes(msg)) return await intentMassagePlans();
    else if (ask_infos.includes(msg)) return info_button();
    else if (ask_toReserve.includes(msg)) return intentReservation();
    // else if (ask_toReserve.includes(msg)) return reserve_button();
    else if (ask_massager.includes(msg)) return massager_cards();
    else if (ask_checkQueue.includes(msg)) return intentCheckQueue();
    else if (ask_staff.includes(msg)) return intentStaff();
    else if (ask_schedule.includes(msg)) return intentStaffSchedule(userId);
    else return defaultMessage();


}

module.exports = { classifyIntent };
