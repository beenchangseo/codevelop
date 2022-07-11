import {IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class EmailVerifyDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}
