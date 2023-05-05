const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const AIMLParser = require("aimlparser");

const PORT = process.env.PORT || 4000;
const token = process.env.TOKEN;
const aimlParser = new AIMLParser({ name: "HelloBot" });
aimlParser.load(["./aiml.xml"]);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/webhook", (req, res) => {
  res.send("HTTP POST request sent to the webhook URL!");
  if (req.body.events[0].type === "message") {
    let reply_token = req.body.events[0].replyToken;

    //get user message
    let msg = req.body.events[0].message.text;

    aimlInterpreter.findAnswerInLoadedAIMLFiles(msg, (answer, wildCardArray, input) => {
        reply(reply_token, answer)
    })
    
    res.sendStatus(200);
  }
  request.on("error", (err) => {
    console.error(err);
  });
});

function reply(reply_token) {
  //Request header
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  //Request body
  let body = JSON.stringify({
    replyToken: reply_token,
    messages: [
      {
        type: "text",
        text: msg,
      },
    ],
  });

  request.post(
    {
      url: "https://api.line.me/v2/bot/message/reply",
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
