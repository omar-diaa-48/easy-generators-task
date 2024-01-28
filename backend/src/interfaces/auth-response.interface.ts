import { IJwtPayload } from "./jwt-payload.interface";

export interface IAuthResponse extends IJwtPayload {
    token: string;
}