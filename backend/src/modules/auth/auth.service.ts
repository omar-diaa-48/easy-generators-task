import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken";
import { Model } from "mongoose";
import { IAuthResponse } from "src/interfaces/auth-response.interface";
import { IJwtPayload } from "src/interfaces/jwt-payload.interface";
import { User } from "src/schemas/user.schema";
import { SignInDto } from "./dtos/sign-in.dto";
import { SignUpDto } from "./dtos/sign-up.dto";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,

        private configService: ConfigService
    ) { }

    async signUp(signUpDto: SignUpDto): Promise<IAuthResponse> {
        let user = await this.userModel.findOne({ email: signUpDto.email })

        if (user) {
            throw new NotFoundException('Email already used, try another')
        }

        const password = await this.hashPassword(signUpDto.password)

        user = await this.userModel.create({ ...signUpDto, password })

        await user.save();

        const payload = this.mapClientToPayload(user);

        const token = jwt.sign(payload, this.configService.get<string>("JWT_SECRET"))

        return {
            ...payload,
            token
        }
    }

    async signIn(signInDto: SignInDto): Promise<IAuthResponse> {
        const user = await this.userModel.findOne({ email: signInDto.email })

        if (!user) {
            throw new NotFoundException('Invalid credentials')
        }

        const hasCorrectCredentials = await this.comparePassword(signInDto.password, user.password)

        if (!hasCorrectCredentials) {
            throw new BadRequestException('Invalid credentials')
        }

        const payload = this.mapClientToPayload(user);

        const token = jwt.sign(payload, this.configService.get<string>("JWT_SECRET"))

        return {
            ...payload,
            token
        }
    }

    private async comparePassword(plainPassword: string, hashPassword: string): Promise<boolean> {
        return bcrypt.compare(plainPassword, hashPassword)
    }

    private async hashPassword(plainPassword: string): Promise<string> {
        return bcrypt.hash(plainPassword, 10)
    }

    private mapClientToPayload(user: User): IJwtPayload {
        return {
            name: user.name,
            email: user.email
        }
    }
}