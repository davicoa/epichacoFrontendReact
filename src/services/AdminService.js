import axios from "axios";
import authHeader from "./AuthHeader";
import API_URL from "constant/apiUrl";

class AdminService {

  adminPost(route, body) {
    return axios.post(API_URL+route, body, {
      headers: authHeader() 
    })
    .then(response => {
      return response.data.msg
    }).catch(err => {
      return err
    })
      
  }
}
export default new AdminService();
