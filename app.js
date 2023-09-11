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
// var detail = {
//   date: '',
//   fullName: '',
//   phoneNo: '',
//   massage_plan: '',
//   duration: 0,
//   status: ''
// };

var userList = {
};

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/webhook", async (req, res) => {
  //user token
  let reply_token = req.body.events[0].replyToken;
  let userId = req.body.events[0].source.userId;
  let playload = [];

  if (!userList.hasOwnProperty(userId)) {
    userList[userId] = {
      datetime: '',
      fullName: '',
      phoneNo: '',
      massagePlan: '',
      duration: 0,
      status: ''
    }
  }
  // console.log(req.body.events[0]);

  if (req.body.events[0].type === "message") {
    //get user message
    let msg = req.body.events[0].message.text;
    const phoneRegex = /^\d+$/;

    if (userList[userId].status == 'ask_name') {
      userList[userId].fullName = msg;
      userList[userId].status = 'finish_name';
    }

    if (msg.match(phoneRegex) && userList[userId].status == 'finish_name') {
      userList[userId].phoneNo = msg;
      userList[userId].status = 'finish_phone';
    }

    //classify intent
    playload.push(await Class.classifyIntent(msg, userId, userList[userId], userList));
  }

  //postback messages
  else if (req.body.events[0].type === "postback") {
    let postback = req.body.events[0].postback;
    // console.log(req.body.events[0].postback);

    if (postback.data == 'reserve_date') {
      userList[userId].datetime = postback.params.datetime;
      var date = postback.params.datetime.split('T')[0];
      var time = postback.params.datetime.split('T')[1];
      var format_date = new Date(date).toLocaleDateString('en-GB');

      playload.push({
        "type": "text",
        "text": `คุณลูกค้าได้เลือกจองใช้บริการ \nวันที่ ${format_date} เวลา ${time}`
      });
      playload.push(await intentReservation('reserve_plan'));
      //reserve_name
    }
    if (postback.data.split('&')[0] == 'reserve_plan') {
      userList[userId].massagePlan = postback.data.split('&')[1];
      playload.push(await intentReservation('reserve_duration'));
    }
    else if (postback.data.split('&')[0] == 'reserve_duration') {
      userList[userId].duration = Number(postback.data.split('&')[1]);
      playload.push(await intentReservation('reserve_user_name'));
      userList[userId].status = 'ask_name';
    }
  }
  // console.log('user detail:', JSON.stringify(userList[userId]));
  console.log('userList:', userList);
  // console.log(`playload is : ${playload}`);
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
