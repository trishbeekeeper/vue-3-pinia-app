import type { UserDetails } from "@/models/UserDetails.model";

export class LoginResponse {
    userDetails?: UserDetails | undefined = undefined;
    isPasswordCorrect?: boolean = false;
  }