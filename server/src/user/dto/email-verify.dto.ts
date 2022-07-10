import {IsNotEmpty, IsString} from 'class-validator';

export class EmailVerifyDto {
    @IsString()
    @IsNotEmpty()
    nickname: string;

    @IsString()
    @IsNotEmpty()
    email: string;
}
