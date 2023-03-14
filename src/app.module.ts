import { Module } from '@nestjs/common';
import { JwtModule, JwtSecretRequestType } from '@nestjs/jwt';

import { AuthController } from './auth/auth.controller';
import { PostsController } from './posts/posts.controller';

import { AuthService } from './auth/auth.service';
import { PostsService } from './posts/posts.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    JwtModule.register({
      secretOrKeyProvider: (requestType: JwtSecretRequestType) => {
        switch (requestType) {
          case JwtSecretRequestType.SIGN:
            return process.env.JWT_PRIVATE_KEY;
          case JwtSecretRequestType.VERIFY:
            return process.env.JWT_PUBLIC_KEY;
          default:
            return process.env.JWT_SECRET;
        }
      },
    }),
  ],
  controllers: [AuthController, PostsController, UsersController],
  providers: [AuthService, PostsService, UsersService],
})
export class AppModule {}
