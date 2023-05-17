const axios = require("axios");
const api_token = process.env.API_TOKEN;
const api_url = process.env.API_URL;

async function intentOpenClose() {
  try {
    const response = await axios.get(`${api_url}/checkOpenStatus`, {
      headers: {
        Authorization: `Bearer ${api_token}`,
      },
    });

    const data = response.data;
    console.log(data);

    let result = {
      type: "text",
      text: data.openAtTime,
    };

    return result;
  } catch (error) {

    console.error(error);
    return;
  }
}

module.exports = { intentOpenClose };
