exports.intentSuggestion = function intentSuggestion(detail, isReply) {
    console.log("intent: suggestion");
    let result = {};

    switch (isReply) {
        case false:
            detail.status = '';

            //sent text to host api

            result = {
                "type": "text",
                "text": "ขอบคุณที่ให้ข้อเสนอแนะค่ะ 🍀"
            };

            break;

        default:
            detail.status = 'suggestion';

            result = {
                "type": "text",
                "text": "พร้อมรับฟังทุกข้อเสนอแนะค่ะ 🙇🏻‍♀️"
            };
            break;
    }

    return result;
};