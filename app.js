require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const Class = require("./classifyIntent");
const { intentReservation } = require('./intents/intent_reservation')

const PORT = process.env.PORT || 4000;
const token = process.env.LINE_CHANEL_ACCESS_TOKEN;
const LINE_REPLY = `${process.env.LINE_API}/message/reply`;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//get user's reservation detail
var detail = {
  date: '2023-09-02T15:26',
  fullName: '',
  phoneNo: '',
  massage_plan: '',
  duration: 0
}

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/webhook", async (req, res) => {
  //user token
  let reply_token = req.body.events[0].replyToken;
  let userId = req.body.events[0].source.userId;
  let playload = [];

  console.log(req.body.events[0]);

  if (req.body.events[0].type === "message") {
    //get user message
    let msg = req.body.events[0].message.text;

    if (msg.includes('---')) {
      const nameRegex = /ชื่อ:\s*([^\nเบอร์โทร:]+)/;
      const phoneRegex = /เบอร์โทร:\s*([^\n---]*)/;

      const nameMatch = msg.match(nameRegex);
      const phoneMatch = msg.match(phoneRegex);

      const name = nameMatch ? nameMatch[1].trim() : '';
      const phoneNo = phoneMatch ? phoneMatch[1].trim() : '';

      console.log("Name:", nameMatch);
      console.log("Name:", name);
      console.log("Phone Number:", phoneNo);
      if (phoneNo == ''|| name == '') {
        if(phoneNo == ''){
          playload.push({
          "type": "text",
          "text": "กรุณากรอกเบอร์โทรศัพท์ในแบบฟอร์ม"
        })
        }
        else if (name == '') {
          playload.push({
            "type": "text",
            "text": "กรุณากรอกชื่อในแบบฟอร์ม"
          })
        }
        else{
          playload.push({
            "type": "text",
            "text": "กรุณากรอกข้อมูลในแบบฟอร์มให้ครบถ้วน"
          })
        }
        
      }
      
      detail.fullName = name;
      detail.phoneNo = phoneNo;

      if (phoneNo != '' && name != '') {
        playload.push(await Class.classifyIntent(msg, userId, detail));
      }
    }
    else {
      //classify intent
      playload.push(await Class.classifyIntent(msg, userId, detail));
    }



  } else if (req.body.events[0].type === "postback") {
    let postback = req.body.events[0].postback;
    console.log(req.body.events[0].postback);

    if (postback.data == 'reserve_date') {
      detail.date = postback.params.datetime;
      playload.push({
        "type": "text",
        "text": "บันทึกเรียบร้อย😉"
      });
      playload.push(await intentReservation('reserve_plan'));
      //reserve_name
    }
    if (postback.data.split('&')[0] == 'reserve_plan') {
      detail.massage_plan = postback.data.split('&')[1];
      playload.push(await intentReservation('reserve_duration'));
    }
    else if (postback.data.split('&')[0] == 'reserve_duration') {
      detail.duration = Number(postback.data.split('&')[1]);
      playload.push(await intentReservation('reserve_user_info'));
      playload.push({
        "type": "text",
        "text": "---\nชื่อ: \nเบอร์โทร: \n---",
        "wrap": true,
      });
    }

    // console.log(postback.data.split('&')[0] == 'reserve_plan');
    console.log(`reservation detail: ${JSON.stringify(detail)}`);
    console.log(playload);
  }
  reply(reply_token, playload);
  res.sendStatus(200);
});

async function reply(reply_token, playload) {
  try {
    // Request header
    let headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    // Request body
    let body = JSON.stringify({
      replyToken: reply_token,
      messages: playload,
    });
    console.log(JSON.stringify(body));

    // Send POST request using Axios
    const response = await axios.post(LINE_REPLY, body, { headers });

    console.log("status = " + response.status);
    // return response.status;
  } catch (error) {
    console.error(error.response.data);
  }
}

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
