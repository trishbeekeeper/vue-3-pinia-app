import { LoginRequest } from "@/models/LoginRequest.model";
import { LoginResponse } from "@/models/LoginResponse.model";
import { UserDetails } from "@/models/UserDetails.model";
import { defineStore } from "pinia";
import { api } from "@/http/api";

export const UserStore = defineStore("userStore", {
    state: () => ({
        email: '',
        password: '',
        isLoggedIn: false,
        userId: '',
        firstName: '', 
        lastName: '', 
        loginResponse: LoginResponse

    }),
    actions: {
        async createLogin(email: '', password: ''): Promise<boolean> {
            const loginRequest = new LoginRequest();
            loginRequest.email = email;
            loginRequest.password = password;
            this.email = email;
            this.password = password;
            console.log("this.password: " + this.password);
            const response:LoginResponse = await api.post("/login", loginRequest)
            .then((r:any) => (r.data))
            .catch(((e: Error) => console.log(e)));

            if (response) {
                this.userId = response.userDetails?.userId!;
                this.isLoggedIn = response.isPasswordCorrect!;
                this.firstName = response.userDetails?.firstName!;
                this.lastName = response.userDetails?.lastName!;
                this.isLoggedIn = response.isPasswordCorrect!;
            }

            console.log("response.userId? " + response.userDetails?.userId);
            console.log("response.isPasswordCorrect? " + response.isPasswordCorrect);

            return this.isLoggedIn;
        }
    },
    getters: {
        getIsLoggedIn(): boolean {
            console.log("in getIsLoggedIn, isLoggedIn? " + this.isLoggedIn.valueOf());
            return this.isLoggedIn;
        },
        getUserId(): number {
            return parseInt(this.userId);
        },
        getFirstName(): string {
            return this.firstName;
        },
        getLastName(): string {
            return this.lastName;
        }

    }
})
