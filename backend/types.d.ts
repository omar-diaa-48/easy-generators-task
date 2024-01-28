import { IJwtPayload } from "./interfaces/jwt-payload.interface";

declare global {
    namespace Express {
        export interface Request {
            user?: IJwtPayload
        }
    }
}