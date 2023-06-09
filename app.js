require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const Class = require("./classifyIntent");

const PORT = process.env.PORT || 4000;
const token = process.env.TOKEN;
const LINE_REPLY = "https://api.line.me/v2/bot/message/reply";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/webhook", async (req, res) => {
  //user token
  let reply_token = req.body.events[0].replyToken;
  let playload = {};
  if (req.body.events[0].type === "message") {
    //get user message
    let msg = req.body.events[0].message.text;

    //classify intent
    playload = await Class.classifyIntent(msg);
  } else if (req.body.events[0].type === "postback") {
    console.log(req.body.events[0].postback);
    playload = {
      type: "text",
      text: req.body.events[0].postback.data,
    };
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
      messages: [playload],
    });
    console.log(body);

    // Send POST request using Axios
    const response = await axios.post(LINE_REPLY, body, { headers });

    console.log("status = " + response.status);
  } catch (error) {
    console.error(error);
  }
}

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
