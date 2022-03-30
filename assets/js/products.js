import axios from 'axios'
const BASE_URL = process.env.BASE_URL;

class Products {
  
  static getProductByEmail(email) {
    return new Promise(async (resolve, reject) => {
      try {
        let config = {
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem("sf_token") }
        }
        let api = "/services/data/v54.0/query?q=SELECT+FIELDS(ALL)+FROM+Product2+WHERE+Buyer_email_from_contacts__c+=+'"+email+"'+LIMIT+200";
        let response = await axios.get(BASE_URL + api, config);
        resolve(response.data);
      } catch (error) {
        reject(error.response)
      }
    })
  }
}

export default Products;