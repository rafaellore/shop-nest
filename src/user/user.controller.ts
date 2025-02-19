import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
  createUser(@Body() userData: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.email = userData.email;
    userEntity.password = userData.password;
    userEntity.name = userData.name;
    userEntity.id = uuid();

    this.userRepository.save(userEntity);

    return {
      id: userEntity.id,
      mensagem: 'usuário criado com sucesso',
    };
  }

  @Get()
  listUsers() {
    const returnedUsers = this.userRepository.list();
    const listUsers = returnedUsers.map(
      (user) => new ListUserDTO(user.id, user.name),
    );

    return listUsers;
  }

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() newData: UpdateUserDTO) {
    const updatedUser = this.userRepository.update(id, newData);

    return {
      user: updatedUser,
      message: 'usuário atualizado com sucesso',
    };
  }

  @Delete('/:id')
  removeUsuario(@Param('id') id: string) {
    const removedUser = this.userRepository.remove(id);

    return {
      user: removedUser,
      message: 'usuário removido com sucesso',
    };
  }
}
