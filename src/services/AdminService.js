import axios from "axios";
import authHeader from "./AuthHeader";
import API_URL from "constant/apiUrl";

class AdminService {

  //pedirs users
  adminGetUsers(route) {
    return axios.get(API_URL + route, { headers: authHeader() })
  }

  adminGet(route, num) {
    let dir = (num===-1)?'':num
    return axios.get(API_URL + route + dir, { headers: authHeader() })
  }

  adminPost(route, body) {
    return axios
      .post(API_URL + route, body, {
        headers: authHeader(),
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return {err, data: {msg: 'Server error!!!'}};
      });
  }

  adminUpdate(route, id, body) {
    return axios
      .put(API_URL + route + '/' + id, body, {
        headers: authHeader(),
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return {err, data: {msg: 'Server error!!!'}};
      });
  }

  adminDelete(route, id) {
    return axios.delete(API_URL + route + '/' + id, { headers: authHeader() })
  }
}
export default new AdminService();
