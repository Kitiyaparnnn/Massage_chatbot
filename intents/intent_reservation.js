const { reserve_button } = require("../components/reserve_button");

exports.intentReservation = function intentReservation(req, res, next) {
    let result = {
        "type": "text",
        "text": "coming soon"
    };
    return result;
}