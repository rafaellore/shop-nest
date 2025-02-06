import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailIsUnique } from '../validation/isUniqueEmail.validation';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  name: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @EmailIsUnique({ message: 'O e-mail informado ja existe' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  @IsOptional()
  password: string;
}
