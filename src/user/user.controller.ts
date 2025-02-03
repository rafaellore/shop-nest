import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/createUserDTO';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    await this.userRepository.save(userData);
    return userData;
  }

  @Get()
  async listUsers() {
    const users = await this.userRepository.list();
    return users;
  }
}
