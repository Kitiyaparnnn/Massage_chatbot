const { reserve_button } = require("../components/reserve_button");

exports.intentReservation = function intentReservation(req, res, next) {
    let result = {
        "type": "text",
        "text": "โปรดติดต่อเจ้าหน้าที่เพื่อจองคิวได้ทางเบอร์โทรศัทพ์ \n ☎️053117548  หรือ 📞0656983469 ค่ะ"
    };
    return result;
}