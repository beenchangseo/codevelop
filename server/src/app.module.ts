import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import {MailerModule} from "@nestjs-modules/mailer";
import {EjsAdapter} from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";
import { EmailModule } from './email/email.module';
import { ProblemModule } from './problem/problem.module';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: 'beenchangseo',
            pass: 'embuecvidrklhutd'
          },
        },
        defaults: {
          from: 'seochangbin_1@naver.com',
        },
        template: {
          dir: __dirname + '/templates',
          adapter: new EjsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
    EmailModule,
    ProblemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
