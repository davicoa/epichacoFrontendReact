import axios from "axios";
import authHeader from "./AuthHeader";
import API_URL from "constant/apiUrl";

class AdminService {
  adminPost(route, body) {
    console.log({ headers: authHeader() });
    
    return axios.post(API_URL+route, {
      headers: authHeader()
      ,
      data: body
      
    });
  }
}
export default new AdminService();
