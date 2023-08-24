const { reserve_button } = require("../components/reserve_button");

exports.intentReservation = function intentReservation(req, res, next) {
    console.log("intent: reservation");
    let result = {
        "type": "text",
        "text": "โปรดติดต่อเจ้าหน้าที่เพื่อจองคิวได้ทางเบอร์โทรศัพท์ \n ☎️053117548 หรือ 📞0656983469 "
    };
    return result;
}