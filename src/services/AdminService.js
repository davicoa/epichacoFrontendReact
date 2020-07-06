import axios from "axios";
import authHeader from "./AuthHeader";
import API_URL from "constant/apiUrl";
const user = JSON.parse(localStorage.getItem('user'));
class AdminService {

  adminPost(route, body) {
    return fetch(
      API_URL+route,
      {
        method: "POST",
        headers: {
          "x-access-token": user.accessToken,
        },
        body: JSON.stringify({body}),
      }
    );
  }
}
export default new AdminService();
