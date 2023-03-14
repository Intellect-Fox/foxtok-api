import {
  BadRequestException,
  UnauthorizedException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { user } from './users.data';

@Injectable()
export class UsersService {
  constructor(private jwtService: JwtService) {}
  me(accessToken: string) {
    try {
      const [tokenType, token] = accessToken.split(' ');
      const tokenData = this.jwtService.decode(token) as { exp: number };
      const dateNow = Date.now() / 1000;

      if (tokenType !== 'Bearer' || !tokenData) {
        throw new Error('Invalid token');
      }

      if (dateNow > tokenData.exp) {
        throw new Error('token expired');
      }

      return user;
    } catch (err) {
      if (err.message === 'token expired') {
        throw new UnauthorizedException('Unauthorized', {
          cause: new Error(),
          description: 'Token expired',
        });
      }

      throw new BadRequestException('Bad Request', {
        cause: new Error(),
        description: err.message,
      });
    }
  }
}
