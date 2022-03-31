import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard';
import { GetUser } from '../decorator';
import { User } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@GetUser() user: User, @GetUser('email') email: string) {
    console.log({ email });
    return user ?? 'no user';
  }

  @Patch(':id')
  async updateUser(@Body() user: User, @Param('id') userId) {
    console.log('Updating this user', { user }, userId);
    try {
      const updatedUser = await this.userService.updateUser(
        user,
        parseInt(userId),
      );

      delete updatedUser.hash;
      return updatedUser;
    } catch (error) {
      throw new ForbiddenException('Something went wrong', error);
    }
  }
}
