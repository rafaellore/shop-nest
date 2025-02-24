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
import { UpdateUserDTO } from './dto/updateUserDTO';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(
    private userRepository: UserRepository,
    private userService: UserService,
  ) {}

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
  async listUsers() {
    const returnedUsers = await this.userService.listUsers();

    return returnedUsers;
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
