import axios from 'axios';
axios.defaults.baseURL = process.env.BASE_URL;
const config = {
  headers: { 'Authorization': 'Bearer 00DF0000000goX5!AQEAQGmQpj0I_EbzFyx6Tl9ZeWJFU7F94PyL2q4l0Hx8VTHOop_Rveaf.ulh3WWFpQVgKtpH.F3v4lueutnNaO7NwsUrFXnt' }
}

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
}

export default Cases;