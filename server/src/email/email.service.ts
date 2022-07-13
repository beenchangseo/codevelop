import { Injectable } from '@nestjs/common';
import {MailerService} from "@nestjs-modules/mailer";
import {User} from "../user/entities/user.entity";

@Injectable()
export class EmailService {
    constructor(
        private readonly mailService: MailerService,
    ) {
    }

    async _send(
        tos: string,
        subject: string,
        templateName: string,
        context: any = {},
    ){
        await this.mailService.sendMail({
            to: tos,
            subject,
            template: `./${templateName}`,
            context,
        });

        return true;
    }

    async signInMail(user: User, loginUrl: string){
        await this._send(user.user_email, 'CODEVELOPE LOGIN','signin.ejs', {
            user_name: user.user_name,
            loginUrl: loginUrl,
        });
    }
}
