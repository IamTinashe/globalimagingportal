import axios from 'axios'
import authentication from "@/assets/js/authentication";
const BASE_URL = process.env.BASE_URL;
let TOKEN = null;

class Support {
  
  static schedule(data) {
    return new Promise(async (resolve, reject) => {
      try {
        if(localStorage.getItem("sf_token") != null){
          TOKEN = localStorage.getItem("sf_token");
        }else{
          TOKEN = await authentication.getToken();
        }
        let config = {
          headers: { 'Authorization': 'Bearer ' + TOKEN }
        }
        let api = "/services/data/v54.0/query?q=SELECT+FIELDS(ALL)+FROM+Product2+WHERE+Buyer_email_from_contacts__c+=+'"+email+"'+LIMIT+200";
        let response = await axios.post(BASE_URL + api, data, config);
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }
}

export default Support;