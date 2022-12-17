import axios from "axios";
import type LoginRequest from "@/models";

axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'http://localhost:8085/';

class LoginService {

  public postLogin(loginRequest: LoginRequest) {
    return axios.post("/login", loginRequest);
  }
}

export default new LoginService();