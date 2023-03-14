import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequest, AuthResponse } from './auth.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() body: AuthRequest): AuthResponse {
    return this.authService.generateTokens(body);
  }

  @Post('refresh-token')
  refreshToken(@Body() body): AuthResponse {
    return this.authService.refreshTokens(body.refreshToken);
  }
}
