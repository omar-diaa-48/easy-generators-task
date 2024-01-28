import { IsString } from 'class-validator';

export class SignUpDto {
    @IsString()
    password: string;

    @IsString()
    email: string;

    @IsString()
    name: string;
}