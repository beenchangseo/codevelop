import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Problem extends BaseEntity{
    @PrimaryGeneratedColumn()
    problem_number: number;

    @Column()
    problem_title: string;

    @Column('longtext',{})
    problem_question: string;

    @Column('longtext',{})
    problem_input: string;

    @Column('longtext', {})
    problem_output: string;

    @Column({default: 1})
    problem_level: number;

    @Column({default: 0})
    problem_challenger: number;
}
