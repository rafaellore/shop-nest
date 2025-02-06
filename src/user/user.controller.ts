import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/createUserDTO';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { ListUserDTO } from './dto/listUserDTO';
import { UpdateUserDTO } from './dto/updateUserDTO';

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
    const returnedUsers = await this.userRepository.list();
    const listUsers = returnedUsers.map(
      (user) => new ListUserDTO(user.id, user.name),
    );

    return listUsers;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() newData: UpdateUserDTO) {
    const updatedUser = await this.userRepository.update(id, newData);

    return {
      user: updatedUser,
      message: 'usuário atualizado com sucesso',
    };
  }
}
