const intent = require("./intents/intent_openClose");

async function classifyIntent(msg) {
  let ask_openClose = ["เวลาเปิดปิด", "วันนี้เปิดไหม", "เวลาทำการ"];
  let ask_massagePlans = ["ค่าบริการ"];

  if (ask_openClose.includes(msg)) return await intent.intentOpenClose();
  else if (ask_massagePlans.includes(msg)) return intent.intentMassagePlans();

  console.log("into: classify");
}

module.exports = { classifyIntent };
