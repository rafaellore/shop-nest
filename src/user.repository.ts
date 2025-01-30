interface User {
  name: string;
  email: string;
  password: string;
}

export class UserRepository {
  private users = [] as User[];

  async save(user) {
    this.users.push(user);
    console.log(this.users);
  }
}
