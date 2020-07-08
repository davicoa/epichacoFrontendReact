import axios from "axios";
import authHeader from "./AuthHeader";

class ApiGraphsDataService {
  getDataGraph(route) {
    return axios.get(route, { headers: authHeader() })
  }
}
export default new ApiGraphsDataService();
