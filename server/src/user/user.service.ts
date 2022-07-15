import {ConflictException, Inject, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {User} from "./entities/user.entity";
import {FindOneOptions, Repository} from "typeorm";
import {EmailVerifyDto} from "./dto/email-verify.dto";
import {JwtService} from "@nestjs/jwt";
import {Payload} from "./security/payload.interface";
import {EmailService} from "../email/email.service";
import { randomBytes } from 'crypto'
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";

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
   * Find one User by FindOneOptions<User>
   */
  async findByFields(option: FindOneOptions<User>): Promise<User | undefined>{
    return await this.usersRepository.findOne(option);
  }

  /*
   * 회원 가입
   */
  async signUp(createUserDto: CreateUserDto): Promise<void>{
    await this.isOptionExist({where: {user_email: createUserDto.email}});
    await this.isOptionExist({where: {user_name: createUserDto.user_name}});
    const user:User = this.usersRepository.create({
      user_email: createUserDto.email,
      user_name: createUserDto.user_name
    });
    await this.usersRepository.save(user);
  }

  /*
   * 중복 필드 존재 유무 체크
   */
  async isOptionExist(option: FindManyOptions<User>): Promise<void>{
    const cnt: number = await this.usersRepository.count(option);
    const {user_email, user_name}: any = option.where
    if (cnt !== 0) throw new ConflictException(
        `There is an account with that 
                    ${user_email === undefined ? '':user_email} 
                    ${user_name === undefined ? '':user_name} already.`
    );
  }

  /*
   * 로그인 URL 링크 이메일 전송
   */
  async emailVerify(emailVerifyDto: EmailVerifyDto){
    const userFind: User = await this.findByFields({where:{user_email: emailVerifyDto.email}});
    if (userFind){
      const loginToken = randomBytes(16).toString('hex');
      await this.userLoginTokenUpdate(userFind, loginToken);
      const loginUrl = `http://localhost:3000/auth/confirm?signInVerifyToken=${loginToken}`;
      await this.emailService.SendSignInMail(userFind, loginUrl);
    }else throw new ConflictException('This user does not exist.');
  }

  /*
   * 유저 로그인 토큰 업데이트
   */
  async userLoginTokenUpdate(findUser: User, loginToken: string): Promise<void>{
    findUser.user_login_token = loginToken;
    await this.usersRepository.save(findUser);
  }

  /*
   * get User With Payload
   */
  async getUserWithPayload(payload: Payload): Promise<User | undefined>{
    return await this.findByFields({where: {user_email: payload.user_email}});
  }

  async getJwtByUserLoginToken(token: string): Promise<string>{
    const user: User | undefined = await this.findByFields({where: {user_login_token: token}});
    const payload: Payload = { user_name: user.user_name, user_email: user.user_email };
    return this.jwtService.sign(payload);
  }
}
