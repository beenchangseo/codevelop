import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_no: number;

    @Column()
    user_id: string;

    @Column()
    user_password: string;
}
