import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return { msg: 'this is the login' };
  }

  signup() {
    return { msg: 'this is the signup' };
  }
}
