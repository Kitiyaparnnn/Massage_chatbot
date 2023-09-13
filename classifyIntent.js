const { intentOpenClose } = require('./intents/intent_openClose');
const { intentMassagePlans } = require('./intents/intent_massagePlans');
const { defaultMessage } = require("./intents/default")
const { intentConfirmReservation } = require("./intents/intent_confirmReservation")
const { intentSendReservationToAdmin } = require("./intents/intent_sendReservationToAdmin")
const { intentMap} = require("./intents/intent_map")
const { info_button } = require("./components/info_button")
const { intentReservation } = require('./intents/intent_reservation')
const { intentStaff } = require('./intents/intent_staff')
const { intentStaffSchedule } = require('./intents/intent_staffSchedule')
const { intentCheckQueue } = require('./intents/intent_checkQueue')
const { reserve_button } = require("./components/reserve_button");
const { massager_cards } = require('./components/massager_cards');
const { staff_button } = require('./components/staff_button');



async function classifyIntent(msg, userId, detail,userList) {
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
            "ปิดวันไหนบ้าง",
        "เวลาให้บริการ"];
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
    let ask_map = ["แผนที่","ที่ตั้ง","ที่ตั้งศูนย์นวด","เส้นทาง"];
    let ask_infos = ["สอบถามข้อมูล"];
    let ask_toReserve = ["ระบบจองคิว", "จอง", "จองคิว", "ระบบจอง"];
    let ask_checkQueue = ["ตรวจสอบคิว", "คิวของฉัน", "คิว"];
    let ask_massager = ["ค้นหาหมอนวด"];
    let ask_staff = ["ติดต่อเจ้าหน้าที่", "เจ้าหน้าที่", "ติดต่อศูนย์นวด", "เบอร์ติดต่อ","ติดต่อสอบถาม"];
    let ask_schedule = ["ตารางงาน", "ตารางการทำงาน", "ตารางทำงาน"]
    let ask_staffChoice = ["ข้อมูลเจ้าหน้าที่", "เมนูพนักงาน", "เมนูเจ้าหน้าที่", "เมนูหมอนวด"];
    let confirm = ["ยืนยัน"];


    console.log("stage: classify");

    if (ask_openClose.includes(msg)) return await intentOpenClose();
    else if (ask_massagePlans.includes(msg)) return await intentMassagePlans();
    else if (ask_map.includes(msg)) return intentMap();
    else if (ask_infos.includes(msg)) return info_button();
    else if (ask_toReserve.includes(msg)) return intentReservation('reserve_date', detail);
    else if (detail.status == 'finish_name') return intentReservation('reserve_user_phone', detail);
    else if (ask_massager.includes(msg)) return massager_cards();
    else if (ask_checkQueue.includes(msg)) return intentCheckQueue();
    else if (ask_staff.includes(msg)) return intentStaff();
    else if (ask_schedule.includes(msg)) return intentStaffSchedule(userId);
    else if (ask_staffChoice.includes(msg)) return staff_button();
    else if (detail.status == 'finish_phone') return intentConfirmReservation(msg, detail);
    else if (confirm.includes(msg)) return intentSendReservationToAdmin(userId,userList);
    else return defaultMessage();
}

module.exports = { classifyIntent };
