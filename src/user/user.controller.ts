import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/createUserDTO';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.email = userData.email;
    userEntity.password = userData.password;
    userEntity.name = userData.name;
    userEntity.id = uuid();

    await this.userRepository.save(userEntity);

    return {
      id: userEntity.id,
      mensagem: 'usuário criado com sucesso',
    };
  }

  @Get()
  async listUsers() {
    const users = await this.userRepository.list();
    return users;
  }
}
