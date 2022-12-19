import { LoginRequest } from "@/models/LoginRequest.model";
import { LoginResponse } from "@/models/LoginResponse.model";
import { ApiaryRequest } from "@/models/ApiaryRequest.model";
import type { ApiaryResponse } from "@/models/ApiaryResponse.model";
import { ApiaryUpdateRequest } from "@/models/ApiaryUpdateRequest.model";
import { UserDetailsRequest} from "@/models/UserDetailsRequest.model";
import type { UserDetails } from "@/models/UserDetails.model";
import { SingleUserId } from "@/models/SingleUserId.model";
import { defineStore } from "pinia";
import { api } from "@/http/api";
import router from '@/router';
import { toNumber } from "@vue/shared";

export const UserStore = defineStore("userStore", {
    state: () => ({
        email: '',
        password: '',
        isLoggedIn: false,
        isUserCreateOK: false,
        userId: '',
        firstName: '', 
        lastName: '',
        loginResponse: LoginResponse
    }),
    actions: {
        async createLogin(email: '', password: ''): Promise<void> {
            const loginRequest = new LoginRequest();
            loginRequest.email = email;
            loginRequest.password = password;
            this.email = email;
            this.password = password;
            //console.log("this.password: " + this.password);
            const response:LoginResponse = await api.post("/login", loginRequest)
            .then((r: any) => (r.data))
            .catch(((e: Error) => console.log(e)));


            if (response) {
                this.userId = response.userDetails?.userId!;
                this.isLoggedIn = response.isPasswordCorrect!;
                this.firstName = response.userDetails?.firstName!;
                this.lastName = response.userDetails?.lastName!;
                this.isLoggedIn = response.isPasswordCorrect!;
                //console.log("in store, this.firstName is " + this.firstName);
                //console.log("in store, this.userId: " + this.userId);
                router.push({name: "apiary"})
            }

            //console.log("response.userId? " + response.userDetails?.userId);
            //console.log("response.isPasswordCorrect? " + response.isPasswordCorrect);
        },
        async createUser(firstName: '', lastName:'', email:'', password:''): Promise<boolean> {
            const userDetailsRequest = new UserDetailsRequest();
            userDetailsRequest.email = email;
            userDetailsRequest.password = password;
            userDetailsRequest.firstName = firstName;
            userDetailsRequest.lastName = lastName;
            const response: UserDetails = await api.post("/users", userDetailsRequest)
            .then((r: any) => (r.data))
            .catch(((e: Error)=> console.log(e)));

            if (response) {
                this.email = response.email!;
                this.userId = response.userId;
                this.firstName = response.firstName;
                this.lastName = response.lastName;
                this.isUserCreateOK = true;
                router.push({name: "apiary"})
            } 
            return this.isUserCreateOK;
        }
    },
    getters: {
        getIsLoggedIn(): boolean {
            //console.log("in getIsLoggedIn, isLoggedIn? " + this.isLoggedIn.valueOf());
            return this.isLoggedIn;
        },
        getUserId(): string {
            return this.userId;
        },
        getFirstName(): string {
            return this.firstName;
        },
        getLastName(): string {
            return this.lastName;
        },
        getIsUserCreateOK(): boolean {
            return this.isUserCreateOK;
        }
    }
})
export const ApiaryStore = defineStore("apiaryStore", {
    state: () => ({
        apiaryId: Number,
        apiaryName: '',
        apiaryZip: '',
        isApiaryCreated: false,
        isApiaryUpdated: false,
        isApiaryGetted: false,
        apiary: {} as ApiaryResponse,
        apiaries: [] as ApiaryResponse[],
        numberApiaries: '', 
        loading: false
    }),
    actions: {
        async createApiary(apiaryName: '', apiaryZip: '', userId: ''): Promise<boolean> {
            const apiaryRequest = new ApiaryRequest();
            apiaryRequest.apiaryName = apiaryName;
            apiaryRequest.apiaryZip = apiaryZip;
            apiaryRequest.userId = userId;

            const response:ApiaryResponse = await api.post("/apiary", apiaryRequest)
            .then((r: any) => (r.data))
            .catch(((e: Error) => console.log(e)));

            if (response) {
                this.apiaryId = toNumber(response.apiaryId);
                this.apiaryName = response.apiaryName;
                this.apiaryZip = response.apiaryZip;
                this.isApiaryCreated = true;
            }

            return this.isApiaryCreated;
        },
        async updateApiary(apiaryName: '', apiaryZip:'', userId: '', apiaryId: ''): Promise<boolean> {
            const apiaryUpdateRequest = new ApiaryUpdateRequest();
            apiaryUpdateRequest.apiaryId = apiaryId;
            apiaryUpdateRequest.userId = userId;
            apiaryUpdateRequest.apiaryName = apiaryName;
            apiaryUpdateRequest.apiaryZip = apiaryZip;
            const response: ApiaryResponse = await api.put("/apiary", apiaryUpdateRequest)
            .then((r: any) => (r.data))
            .catch(((e: Error)=> console.log(e)));

            if (response) {
                this.apiaryId = toNumber(response.apiaryId);
                this.apiaryName = response.apiaryName;
                this.apiaryZip = response.apiaryZip;
                this.isApiaryUpdated = true;
            } 
            return this.isApiaryUpdated;
        },
        async getAllApiaries(userId: any): Promise<void> {
            console.log("in getAllApiaries!userID is " + userId);
            const singleUserId = new SingleUserId();
            singleUserId.userId =  userId;

            const response: ApiaryResponse[] = await api.post("/apiary/getAll", singleUserId)
            .then((r: any) => (r.data))
            .catch(((e: Error)=> console.log(e)));

            if (response) {
                this.numberApiaries = response.length.toString();
                this.isApiaryGetted = true;
                this.apiaries = response;
                console.log("in store, response.length: " + response.length);
                const apiary = response[0];
                console.log("in store, retrieve apiary?" + apiary.apiaryName);
            }
        }
    },
    getters: {
        getApiaryId(): number {
            return toNumber(this.apiaryId);
        },
        getApiaryName(): string {
            return this.apiaryName;
        },
        getApiaryZip(): string {
            return this.apiaryZip;
        },
        getIsApiaryCreated(): boolean {
            return this.isApiaryCreated;
        },
        getIsApiaryUpdated(): boolean {
            return this.isApiaryUpdated;
        },
        getIsApiaryGetted(): boolean {
            return this.isApiaryGetted;
        }, 
        getApiary(): ApiaryResponse {
            return this.apiary;
        },
        getApiaries(): ApiaryResponse[] {
            return this.apiaries;
        },
        getNumberApiaries(): number {
            return Number(this.numberApiaries);
        }
    }
})
