import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users = [] as UserEntity[];

  async save(user) {
    this.users.push(user);
    console.log(this.users);
  }

  async list() {
    return this.users;
  }

  async existWithEmail(email: string) {
    const possibleUser = this.users.find((user) => user.email === email);

    return possibleUser !== undefined;
  }

  private findById(id: string) {
    const possiblyUser = this.users.find((savedUser) => savedUser.id === id);

    if (!possiblyUser) {
      throw new Error('Usuário não existe');
    }

    return possiblyUser;
  }

  async update(id: string, updateData: Partial<UserEntity>) {
    const user = this.findById(id);

    Object.entries(updateData).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      user[key] = value;
    });

    return user;
  }

  async remove(id: string) {
    const user = this.findById(id);
    this.users = this.users.filter((usuarioSalvo) => usuarioSalvo.id !== id);

    return user;
  }
}
