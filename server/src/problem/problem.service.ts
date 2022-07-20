import {Inject, Injectable} from '@nestjs/common';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
import {Repository} from "typeorm";
import {Problem} from "./entities/problem.entity";

@Injectable()
export class ProblemService {
    constructor(
        @Inject('PROBLEM_REPOSITORY')
        private problemRepository: Repository<Problem>,
    ) {
    }

    async getProblemByNumber(number: number): Promise<Problem>{
        return this.problemRepository.findOneBy({problem_number: number});
    }

    async getAllProblem(): Promise<Problem[]>{
        return await this.problemRepository.find();
    }
}
