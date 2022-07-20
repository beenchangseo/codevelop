import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Problem extends BaseEntity{
    @PrimaryGeneratedColumn()
    problem_number: number;

    @Column()
    problem_title: string;

    @Column()
    problem_question: string;

    @Column()
    problem_input: string;

    @Column()
    problem_output: string;
}
