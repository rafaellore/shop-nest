import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '../types/user.type';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  constructor(private usuarioRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: User) {
    await this.userRepository.save(userData);
    return userData;
  }

  @Get()
  async listUsers() {
    const users = await this.userRepository.list();
    return users;
  }
}
