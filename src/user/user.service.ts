import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  updateUser(user: User, userId: number) {
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        ...user,
      },
    });
  }
}
