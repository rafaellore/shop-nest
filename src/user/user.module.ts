import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { isUniqueEmailValidator } from './validation/isUniqueEmail.validation';

@Module({
  controllers: [UserController],
  providers: [UserRepository, isUniqueEmailValidator],
})
export class UserModule {}
