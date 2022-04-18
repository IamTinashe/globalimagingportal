import axios from 'axios';
axios.defaults.baseURL = process.env.BASE_URL;
import authentication from "@/assets/js/authentication";
const BASE_URL = process.env.BASE_URL;
let TOKEN = null;

class Cases {
  static getAllCases() {
    let api = '/services/data/v20.0/query/?q=SELECT+Id,Subject,Status,CaseNumber,IsClosed,SuppliedEmail,Description,OwnerId+FROM+Case';
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.get(api, config);
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }

  static reportCase(data) {
    let api = '/services/data/v54.0/sobjects/case';
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
        let response = await axios.post(api, data, config);
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }
}

export default Cases;