import type { UserDetails } from "@/models/UserDetails.model";

export class LoginResponse {
    public userDetails: UserDetails;
    public isPasswordCorrect: boolean = false;
    constructor(
      userDetails: UserDetails,
      isPasswordCorrect: boolean,
    ) {
        this.userDetails = userDetails,
        this.isPasswordCorrect = isPasswordCorrect
    }
  }