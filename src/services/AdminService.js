import axios from "axios";
import authHeader from "./AuthHeader";
import API_URL from "constant/apiUrl";

class AdminService {

  adminGet(route){
    return axios.get(API_URL + route+'/10', { headers: authHeader() })
  }

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

  adminUpdate(route, id,  body) {
    console.log('adm', id);
    return axios
      .put(API_URL + route+'/'+id, body, {
        headers: authHeader(),
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return "Fallo en la carga";
      });
  }

  adminDelete(route, id){
    console.log('admDelete', id);
    return axios.delete(API_URL + route+'/'+id, { headers: authHeader() })
  }
}
export default new AdminService();
