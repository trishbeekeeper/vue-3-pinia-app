import type { LoginRequest } from "@/models/LoginRequest.model";
import type { LoginResponse } from "@/models/LoginResponse.model";
import { api } from "@/http/api";

class LoginService {

  postLogin(loginRequest: LoginRequest) {
    return api.post("/login", loginRequest);
  }
}

export default new LoginService();


/*

            console.log("this.password: " + this.password);
            const response:LoginResponse = await api.post("/login", loginRequest)
            .then((r:any) => (r.data));
            console.log("response.userId? " + response.userDetails?.userId);
            console.log("response.isPasswordCorrect? " + response.isPasswordCorrect);

*/