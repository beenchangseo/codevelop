import {Inject, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
  constructor(
      @Inject('USER_REPOSITORY')
      private usersRepository: Repository<User>
  ) {
  }

  async create(createUserDto: CreateUserDto): Promise<void>{
    const user = this.usersRepository.create(createUserDto);
    await this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }
}
