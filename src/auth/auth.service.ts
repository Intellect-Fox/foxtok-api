import {
  BadRequestException,
  UnauthorizedException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthRequest, AuthResponse } from './auth.interface';

const TWO_MIN = 120;
const ONE_HOUR = 60 * 60;

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  generateTokens({ email, password }: AuthRequest): AuthResponse {
    if (email && password) {
      const accessToken = this.jwtService.sign({
        email,
        exp: Math.floor(Date.now() / 1000) + TWO_MIN,
      });
      return {
        accessToken: `Bearer ${accessToken}`,
        refreshToken: this.jwtService.sign({
          token: accessToken,
          exp: Math.floor(Date.now() / 1000) + ONE_HOUR,
        }),
      };
    }

    throw new BadRequestException('Validation error', {
      cause: new Error(),
      description: 'Form fields must be filled',
    });
  }

  refreshTokens(refreshToken): AuthResponse {
    const dateNow = Date.now() / 1000;
    let refreshTokenData = null;

    try {
      refreshTokenData = this.jwtService.decode(refreshToken) as {
        token: string;
        exp: number;
      };

      if (!refreshTokenData) {
        throw new Error('Invalid token');
      }
    } catch (err) {
      throw new BadRequestException('Bad Request', {
        cause: new Error(),
        description: err.message,
      });
    }

    if (dateNow > refreshTokenData.exp) {
      throw new UnauthorizedException('Unauthorized', {
        cause: new Error(),
        description: 'Token expired',
      });
    }

    const { email } = this.jwtService.decode(refreshTokenData.token) as {
      email: string;
    };

    return this.generateTokens({ email, password: 'random_password' });
  }
}
