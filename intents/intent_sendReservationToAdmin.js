async function intentSendReservationToAdmin(userId, userList) {
    try {
        //send api to admin

        delete (userList[userId]);

        let result = {
            "type": "text",
            "text": "เจ้าหน้าที่ได้รับข้อมูลการจองแล้ว โปรดรอเจ้าหน้าที่ติดต่อกลับ",
        };

        return result;
    } catch (error) {

    }
}

module.exports = { intentSendReservationToAdmin };