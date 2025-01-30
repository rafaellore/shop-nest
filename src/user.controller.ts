import { Body, Controller, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

interface User {
  name: string;
  email: string;
  password: string;
}
@Controller('/users')
export class UserController {
  private userRepository = new UserRepository();

  @Post()
  async createUser(@Body() userData: User) {
    await this.userRepository.save(userData);
    return userData;
  }
}
