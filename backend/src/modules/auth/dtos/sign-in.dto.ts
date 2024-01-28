import { IsString } from 'class-validator';

export class SignInDto {
    @IsString()
    password: string;

    @IsString()
    email: string;
}