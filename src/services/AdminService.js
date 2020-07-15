import axios from "axios";
import authHeader from "./AuthHeader";
import API_URL from "constant/apiUrl";

class AdminService {
  adminPost(route, body) {
    return axios
      .post(API_URL + route, body, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data.msg;
      })
      .catch((err) => {
        return "Fallo en la carga";
      });
  }

  adminGet(route){
    return axios.get(API_URL + route, { headers: authHeader() })
  }

  adminDelete(route, id){
    return axios.delete(API_URL + route+'/'+id, { headers: authHeader() })
  }
}
export default new AdminService();
