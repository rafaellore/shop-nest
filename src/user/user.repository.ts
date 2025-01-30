import { User } from '../types/user.type';

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
