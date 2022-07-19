import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Req,
  Request, UnauthorizedException, Res, Query
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {EmailVerifyDto} from "./dto/email-verify.dto";
import {AuthGuard} from "./security/auth.guard";
import {User} from "./entities/user.entity";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /*
   * 회원 가입 API
   */
  @Post('signup')
  @UsePipes(ValidationPipe)
  signUp(@Body() createUserDto: CreateUserDto): Promise<void>{
    return this.userService.signUp(createUserDto);
  }

  /*
   * 이메일 검증 및 로그인 URL 전송 API
   */
  @Post('email-verify')
  @UsePipes(ValidationPipe)
  emailVerify(@Body() emailVerifyDto: EmailVerifyDto){
    return this.userService.emailVerify(emailVerifyDto);
  }

  @Get('confirm')
  async isConfirm(
      @Query('signInVerifyToken') signInVerifyToken: string,
      @Res() res
  ){
    const jwt: string = await this.userService.getJwtByUserLoginToken(signInVerifyToken);
      res.setHeader('Authorization', 'Bearer '+jwt);
      res.cookie('jwt',jwt,{
        // httpOnly: true,
        maxAge: (60 * 1000) * 60 * 24
      });
      return res.send({
        message: 'success'
      });
  }

  /*
   * Jwt token verify
   */
  @Get('token-verify')
  @UseGuards(AuthGuard)
  isTokenVerify(@Request() request): any{
    const user: User | undefined = request.user;
    return {
      user_name: user.user_name,
    };
  }
}
