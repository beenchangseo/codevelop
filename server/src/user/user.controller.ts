import {Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {EmailVerifyDto} from "./dto/email-verify.dto";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Post('signup')
  @UsePipes(ValidationPipe)
  signUp(@Body() createUserDto: CreateUserDto): Promise<void>{
    return this.userService.signUp(createUserDto);
  }
  @Post('email-verify')
  @UsePipes(ValidationPipe)
  emailVerify(@Body() emailVerifyDto: EmailVerifyDto){
    return this.userService.emailVerify(emailVerifyDto);
  }
}
