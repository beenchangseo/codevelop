import {ConflictException, Inject, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";
import {EmailVerifyDto} from "./dto/email-verify.dto";
import {JwtService} from "@nestjs/jwt";
import {Payload} from "./security/payload.interface";
import {EmailService} from "../email/email.service";

@Injectable()
export class UserService {
  constructor(
      @Inject('USER_REPOSITORY')
      private usersRepository: Repository<User>,
      private jwtService: JwtService,
      private readonly emailService: EmailService,
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
   * Find one user entity by Email
   */
  async findOneUserByEmail(email: string): Promise<User | undefined>{
    return await this.usersRepository.findOne({where: {user_email: email}});
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
    const userFind = await this.findOneUserByEmail(emailVerifyDto.email);
    if (userFind){
      const payload: Payload = { user_name: userFind.user_name, user_email: userFind.user_email };
      const accessToken = this.jwtService.sign(payload);
      const loginUrl = `http://localhost:3000/auth/confirm?signupVerifyToken=${accessToken}`;
      await this.emailService.signInMail(userFind, loginUrl);
      //
      // return {
      //   accessToken: accessToken
      // }
    }else throw new ConflictException('This user does not exist.');
  }

  /*
   * jwt token validate
   */
  async tokenValidateUser(payload: Payload): Promise<User | undefined>{
    return await this.findOneUserByEmail(payload.user_email);
  }

  /*
   * get Cookie With JwtToken
   */
  getCookieWithJwtToken(user: User): string{
    const payload: Payload = {user_name: user.user_name, user_email: user.user_email};
    return this.jwtService.sign(payload);
  }
}
