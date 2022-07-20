import {DataSource} from "typeorm";
import {Problem} from "./entities/problem.entity";

export const problemRepository = [
    {
        provide: 'PROBLEM_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Problem),
        inject: ['DATA_SOURCE'],
    },
]