import { Injectable, NotImplementedException } from "@nestjs/common";
import { IAuthResponse } from "src/interfaces/auth-response.interface";
import { SignInDto } from "./dtos/sign-in.dto";
import { SignUpDto } from "./dtos/sign-up.dto";

@Injectable()
export class AuthService {
    constructor() { }

    async signUp(signUpDto: SignUpDto): Promise<IAuthResponse> {
        throw new NotImplementedException();
    }

    async signIn(signInDto: SignInDto): Promise<IAuthResponse> {
        throw new NotImplementedException();
    }
}