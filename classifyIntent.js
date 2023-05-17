function classifyIntent(msg){
    let ask_openClose = ["เวลาเปิดปิด", "วันนี้เปิดไหม", "เวลาทำการ"];
    let ask_massagePlans = ["ค่าบริการ"];

    if(msg.includes(ask_openClose)) return intentOpenclose()
    else if(msg.includes(ask_massagePlans)) return intentMassagePlans()

}

module.exports = { classifyIntent };