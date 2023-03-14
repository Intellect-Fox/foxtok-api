import { Headers, Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('me')
  me(@Headers() headers) {
    return this.usersService.me(headers.authorization);
  }
}
