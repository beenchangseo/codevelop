import {ConflictException, Inject, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";
import {EmailVerifyDto} from "./dto/email-verify.dto";

@Injectable()
export class UserService {
  constructor(
      @Inject('USER_REPOSITORY')
      private usersRepository: Repository<User>
  ) {
  }

  /*
   * 회원 가입
   */
  async signUp(createUserDto: CreateUserDto): Promise<void>{
    if (await this.isEmailExist(createUserDto.email)) throw new ConflictException(`There is an account with that email already.`);
    if (await  this.isUserNameExist(createUserDto.user_name)) throw new ConflictException(`There is an account with that username already.`);
    const user:User = this.usersRepository.create({
      user_email: createUserDto.email,
      user_name: createUserDto.user_name
    });
    await this.usersRepository.save(user);
  }

  /*
   * 이메일 존재 유무 체크
   */
  async isEmailExist(email: string): Promise<boolean>{
    const isExist: number = await this.usersRepository.count({where: {user_email: email}})
    return isExist > 0;
  }

  /*
   * 유저이름 존재 유무 체크
   */
  async isUserNameExist(user_name: string): Promise<boolean>{
    const isExist: number = await this.usersRepository.count({where:{user_name: user_name}});
    return isExist > 0;
  }

  /*
   * 회원 가입 이메일 보내기
   */
  async SendSignUpConfirmEmail(createUserDto: CreateUserDto){
    return '';
  }

  /*
   * 로그인 URL 링크 이메일 전송
   */
  async emailVerify(emailVerifyDto: EmailVerifyDto){
    if (await this.isEmailExist(emailVerifyDto.email)){
      console.log(emailVerifyDto.email, '가 있습니다')
    }
  }
}
