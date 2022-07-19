import {Column, Entity, PrimaryGeneratedColumn, Unique} from "typeorm";
import {IsEmail} from "class-validator";

@Entity()
@Unique(['user_email','user_name'])
export class User {
    @PrimaryGeneratedColumn()
    user_no: number;

    @Column()
    user_name: string;

    @Column()
    @IsEmail()
    user_email: string;

    @Column({
        default: ''
    })
    user_login_token: string;

}
