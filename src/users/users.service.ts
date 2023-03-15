import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { user } from './users.data';

@Injectable()
export class UsersService {
  constructor(private authService: AuthService) {}

  me(accessToken: string) {
    this.authService.validateToken(accessToken);
    return user;
  }
}
