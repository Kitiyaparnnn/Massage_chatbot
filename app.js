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

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/webhook", async (req, res) => {
  //user token
  let reply_token = req.body.events[0].replyToken;
  let userId = req.body.events[0].source.userId;
  let playload = [];

  //get user's reservation detail
  var detail = {
    date: '',
    fullName: '',
    phoneNo: '',
    massage_plan: '',
    duration: 0
  }

  console.log(req.body.events[0]);

  if (req.body.events[0].type === "message") {
    //get user message
    let msg = req.body.events[0].message.text;

    //classify intent
    playload.push(await Class.classifyIntent(msg, userId));
  } else if (req.body.events[0].type === "postback") {
    let postback = req.body.events[0].postback;
    console.log(req.body.events[0].postback);

    if (postback.data == 'reserve_date') {
      detail.date = postback.params.datetime;
      playload.push({
        "type": "text",
        "text": detail.date
      });
      playload.push(await intentReservation('reserve_plan'));
      //reserve_name
    }
    if (postback.data.split('&')[0] == 'reserve_plan') {
      detail.massage_plan = postback.data.split('&')[1];
      playload.push(await intentReservation('reserve_duration'));
    }
    else if (postback.data.split('&')[0] == 'reserve_duration') {
      detail.duration = postback.data.split('&')[1];
      playload.push(await intentReservation('reserve_user_info'));
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
