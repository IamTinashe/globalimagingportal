import axios from 'axios';
import jsforce from 'jsforce';

class Authentication {
  static getToken() {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.post(process.env.BASE_URL+'?client_id='+process.env.CLIENT_ID+'&client_secret='+process.env.CLIENT_SECRET+'&grant_type='+process.env.GRANT_TYPE+'&username='+process.env.USERNAME+'&password='+process.env.PASSWORD, { progress: true });
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }

  static login(){
    var conn = new jsforce.Connection({
      oauth2 : {
        loginUrl : process.env.BASE_URL,
        clientId : process.env.CLIENT_ID,
        clientSecret : process.env.CLIENT_SECRET,
        redirectUri : process.env.REDIRECT_URI
      }
    });
    conn.login(process.env.USERNAME, process.env.PASSWORD, function(err, userInfo) {
      if (err) { return console.error(err); }
      localStorage.setItem("sf_token", conn.accessToken);
    });
  }
}

export default Authentication;