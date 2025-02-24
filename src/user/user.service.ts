import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { ListUserDTO } from './dto/listUserDTO';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async listUsers() {
    const savedUsers = await this.userRepository.find();

    const usersList = savedUsers.map(
      (user) => new ListUserDTO(user.id, user.name),
    );

    return usersList;
  }
}
