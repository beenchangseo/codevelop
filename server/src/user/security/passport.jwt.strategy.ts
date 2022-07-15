import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy, VerifiedCallback} from "passport-jwt";
import {Payload} from "./payload.interface";
import {UserService} from "../user.service";
import {User} from "../entities/user.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private userService: UserService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            ]),
            ignoreExpiration: false,
            secretOrKey: 'SECRET_KEY',
        });
    }

    async validate(payload: Payload, done: VerifiedCallback): Promise<any>{
        const user: User | undefined = await this.userService.getUserWithPayload(payload);
        if(!user) {
            return done(new UnauthorizedException({message: 'user does not exist'}), false);
        }
        return done(null, user);
    }
}