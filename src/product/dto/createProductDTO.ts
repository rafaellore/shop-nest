import { IsNotEmpty, IsNumber, Min, MaxLength } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty({ message: 'O nome do produto não pode ser vazio' })
  @MaxLength(100, {
    message: 'O nome do produto deve ter no máximo 100 caracteres',
  })
  name: string;

  @IsNumber({}, { message: 'O valor do produto deve ser um número' })
  @Min(0, { message: 'O valor do produto não pode ser negativo' })
  value: number;

  @IsNotEmpty({ message: 'O tipo do produto não pode ser vazio' })
  @MaxLength(50, {
    message: 'O tipo do produto deve ter no máximo 50 caracteres',
  })
  type: string;

  @IsNotEmpty({ message: 'A descrição do produto não pode ser vazia' })
  @MaxLength(255, {
    message: 'A descrição do produto deve ter no máximo 255 caracteres',
  })
  description: string;
}
