const axios = require("axios");
const api_token = process.env.API_TOKEN;
const api_url = process.env.API_URL;
const { staff_schedule } = require('../components/staff_schedule');

exports.intentStaffSchedule = async function intentStaffSchedule(userId) {
    console.log("intent: staff schedule");
    console.log(`userId: ${userId}`);
    try {
        //get user's line username from LINE API
        const user_name = await axios.get(`${process.env.LINE_API}/profile/${userId}`, {
            headers: {
                Authorization: `Bearer ${process.env.LINE_CHANEL_ACCESS_TOKEN}`,
            },
        });
        console.log(`userName: ${user_name.data.displayName}`);
        // console.log(!!!user_name.data);

        //get access staff schedule from SERVER API
        //sent username then get true/false
        // const response = await axios.post(`${api_url}/checkOpenStatus`, {
        //     headers: {
        //         Authorization: `Bearer ${api_token}`,
        //     },
        // });

        if (!!!user_name.data) {
            let result = {
                "type": "text",
                "text": "ไม่สามารถเข้าดูข้อมูลส่วนนี้ได้ค่ะ กรุณาติดต่อเจ้าหน้าที่"
            }

            return result;
        }
        else {
            var masseuseNo = 10;
            return staff_schedule(masseuseNo);
        }

    } catch (error) {
        console.error(error);
    }
}