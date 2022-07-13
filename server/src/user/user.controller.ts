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
  Request, UnauthorizedException, Res
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

  /*
   * 로그인 URL 검증 API
   */
  @Get('confirm')
  @UseGuards(AuthGuard)
  isConfirm( @Request() request, @Res() res ): any{
    const user: User | undefined = request.user;
    const jwt = this.userService.getCookieWithJwtToken(user);
    res.setHeader('Authorization', 'Bearer '+jwt);
    res.cookie('jwt',jwt,{
      httpOnly: true,
      maxAge: 60 * 1000
    });
    return res.send({
      message: 'success'
    });
  }
}
