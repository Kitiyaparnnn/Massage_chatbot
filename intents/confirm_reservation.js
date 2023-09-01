function confirmReservation() {
    console.log("intent: default");

    let result = {
        "type": "text",
        "text": "ยืนยันการจอง"
    };
    
    return result;
}

module.exports = {confirmReservation};