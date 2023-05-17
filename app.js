require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const Class = require("./classifyIntent")
// const AIMLParser = require("aimlparser");

const PORT = process.env.PORT || 4000;
const token = process.env.TOKEN;
const LINE_REPLY = "https://api.line.me/v2/bot/message/reply"

// const aimlParser = new AIMLParser({ name: "HelloBot" });
// aimlParser.load(["./aiml.xml"]);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/webhook", (req, res) => {
  //user token
  let reply_token = req.body.events[0].replyToken;

  //get user message
  let msg = req.body.events[0].message.text;

  //classify intend
  let playload = Class.classifyIntent(msg);

  // reply(reply_token, playload)

  res.sendStatus(200);

});


function reply(reply_token, playload) {
  //Request header
  let headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  };

  //Request body
  let body = JSON.stringify({
    replyToken: reply_token,
    messages: [
      playload,
    ],
  });

  request.post(
    {
      url: L,
      headers: headers,
      body: body,
    },
    (err, res, body) => {
      console.log("status = " + res.statusCode);
    }
  );
}

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
