import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { AuthGuard } from "src/guards/auth.guard";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dtos/sign-in.dto";
import { SignUpDto } from "./dtos/sign-up.dto";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('sign-up')
    signUp(
        @Body() signUpDto: SignUpDto,
    ) {
        return this.authService.signUp(signUpDto)
    }

    @Post('sign-in')
    signIn(
        @Body() signInDto: SignInDto
    ) {
        return this.authService.signIn(signInDto)
    }

    @UseGuards(AuthGuard)
    @Post('verify')
    verify(
        @Req() req: Request
    ) {
        return this.authService.verify(req.user)
    }
}