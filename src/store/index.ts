import { LoginRequest } from "@/models/LoginRequest.model";
import { defineStore } from "pinia";


export const useLoginRequest = defineStore("loginRequest", {
    state: () => ({
        email: '',
        password: '',
        isLoggedIn: false
    }),
    actions: {
        createLogin(email: '', password: ''): boolean {
            const loginRequest = new LoginRequest();
            loginRequest.email = email;
            loginRequest.password = password;
            this.email = email;
            this.password = password;
            console.log("this.password: " + this.password);
            if (this.password == "123") {
                this.isLoggedIn = true;
                console.log("in createLogin, isLoggedIn after? " + this.isLoggedIn.valueOf());
            }
            return this.isLoggedIn;
        }
    },
    getters: {
        getIsLoggedIn(): boolean {
            if (this.password == "123") {
                this.isLoggedIn = true;
            }
            console.log("in getIsLoggedIn, isLoggedIn? " + this.isLoggedIn.valueOf());
            return this.isLoggedIn;
        }
    }
})

export const user = defineStore("user", {
    state: () => ({
        email: '',
        password: '',
        isLoggedIn: false
    }),
    actions: {
        createLogin(email: '', password: ''): boolean {
            const loginRequest = new LoginRequest();
            loginRequest.email = email;
            loginRequest.password = password;
            return this.isLoggedIn;
        }
    },
    getters: {
        getIsLoggedIn(): boolean {
            if (this.password == "123") {
                this.isLoggedIn = true;
            }
            console.log("in getIsLoggedIn, isLoggedIn? " + this.isLoggedIn.valueOf());
            return this.isLoggedIn;
        }
    }
})
