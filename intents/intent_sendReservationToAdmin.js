async function intentSendReservationToAdmin(detail) {
    try {
        //send api to admin

        //then delete the old reservation
        delete(detail);
        
        let result = {
            "type": "text",
            "text": "เจ้าหน้าที่ได้รับข้อมูลการจองแล้ว โปรดรอเจ้าหน้าที่ติดต่อกลับ",
          };
        
        return result;
    } catch (error) {
        
    }
}

module.exports = {intentSendReservationToAdmin};