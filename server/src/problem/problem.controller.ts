import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
import {Problem} from "./entities/problem.entity";

@Controller('problem')
export class ProblemController {
  constructor(private readonly problemService: ProblemService) {}

  @Get('number/:number')
  async getProblemByNumber(@Param('number') number: number): Promise<Problem>{
      return this.problemService.getProblemByNumber(number);
  }

  @Get('listAll')
  async getAllProblems(): Promise<Problem[]>{
    return this.problemService.getAllProblem()
  }
}
