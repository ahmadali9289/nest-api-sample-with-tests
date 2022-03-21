import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guard';
import { GetUser } from '../decorator';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User, @GetUser('email') email: string) {
    console.log({ email });
    return user ?? 'no user';
  }
}
