import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import {UserController} from './user.controller';
import {DatabaseModule} from "../database/database.module";
import {userRepository} from "./user.repository";
import {JwtModule} from "@nestjs/jwt";
import {EmailModule} from "../email/email.module";
import {PassportModule} from "@nestjs/passport";
import {JwtStrategy} from "./security/passport.jwt.strategy";

@Module({
    imports: [
        DatabaseModule,
        JwtModule.register({
            secret: 'SECRET_KEY',
            signOptions: {expiresIn: '24h'},
        }),
        EmailModule,
        PassportModule
    ],
    controllers: [UserController],
    providers: [
        ...userRepository,
        UserService,
        JwtStrategy,
    ],
    exports: [PassportModule, JwtStrategy]
})
export class UserModule {
}
