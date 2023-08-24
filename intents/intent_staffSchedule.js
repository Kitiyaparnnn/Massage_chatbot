const axios = require("axios");
const { staff_schedule } = require('../components/staff_schedule');

exports.intentStaffSchedule = async function intentStaffSchedule(userId) {
    console.log("intent: staff schedule");
    console.log(`userId: ${userId}`);
    try {
        const user_name = await axios.get(`${process.env.LINE_API}/profile/${userId}`, {
            headers: {
                Authorization: `Bearer ${process.env.LINE_CHANEL_ACCESS_TOKEN}`,
            },
        });
        console.log(user_name);
        // if(user_name){
        //     staff_schedule();
        // }
        // else{
        //     let result = {
        //         "type": "text",
        //         "text": "ไม่สามารถเข้าดูข้อมูลส่วนนี้ได้ค่ะ กรุณาติดต่อเจ้าหน้าที่"
        //     }

        //     return result;
        // }
        let result = {
            "type": "text",
            "text": "ไม่สามารถเข้าดูข้อมูลส่วนนี้ได้ค่ะ กรุณาติดต่อเจ้าหน้าที่"
        }

        return result;

    } catch (error) {
        console.error(error);
    }
}