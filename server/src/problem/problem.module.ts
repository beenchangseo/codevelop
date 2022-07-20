import { Module } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { ProblemController } from './problem.controller';
import {DatabaseModule} from "../database/database.module";
import {problemRepository} from "./problem.repository";

@Module({
  imports: [
      DatabaseModule,
  ],
  controllers: [ProblemController],
  providers: [
      ...problemRepository,
      ProblemService,
  ]
})
export class ProblemModule {}
