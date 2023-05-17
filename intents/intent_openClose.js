const api_token = process.env.API_TOKEN;

function getCheckOpenStatus() {

    request('https://massage-q-manager-remix.vercel.app/api/chatbot/checkOpenStatus',
      {
        'auth': {
          'bearer': api_token
        }
      }, (error, res) => {
        // user error
        const respError = res.error;
        if (error) {
          console.log(error);
          return ;
        } else if (respError) {
          console.log(respError);
          return ;
        } else {
          const data = JSON.parse(res.body);
          console.log(data);
          return data;
        }
      });
}

function intentOpenclose() {
    let data = getCheckOpenStatus();
    let result = {
        type: "text",
        text: "เวลาเปิด-ปิด :"+ `${data.closeAtDays}`
      }
    
      return result;
}
