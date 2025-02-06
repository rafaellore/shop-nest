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

  async update(id: string, updateData: Partial<UserEntity>) {
    const possiblyUser = this.users.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );

    if (!possiblyUser) {
      throw new Error('Usuário não existe');
    }

    Object.entries(updateData).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      possiblyUser[key] = value;
    });

    return possiblyUser;
  }
}
