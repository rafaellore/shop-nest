import { Injectable } from '@nestjs/common';
import { User } from '../types/user.type';

@Injectable()
export class UserRepository {
  private users = [] as User[];

  async save(user) {
    this.users.push(user);
    console.log(this.users);
  }

  async list() {
    return this.users;
  }
}
