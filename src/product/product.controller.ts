import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { ProductEntity } from './product.entity';
import { CreateProductDTO } from './dto/createProductDTO';
import { v4 as uuid } from 'uuid';
import { UpdateProductDTO } from './dto/updateProductDTO';

@Controller('/products')
export class ProductController {
  constructor(private repo: ProductRepository) {}

  @Get()
  listUsers() {
    const products = this.repo.list();
    return products;
  }

  @Post()
  async createProduct(@Body() productData: CreateProductDTO) {
    const productEntity = new ProductEntity();
    productEntity.id = uuid();
    productEntity.name = productData.name;
    productEntity.value = productData.value;
    productEntity.type = productData.type;
    productEntity.description = productData.description;

    const createdProduct = await this.repo.create(productEntity);

    return {
      createdProduct,
      message: 'Produto criado com sucesso',
    };
  }

  @Get(':id')
  getUser(@Param() id: string) {
    const user = this.repo.findById(id);
    return user;
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() product: UpdateProductDTO) {
    const updatedProduct = this.repo.update(id, product);
    return updatedProduct;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    const deletedProduct = this.repo.remove(id);
    return deletedProduct;
  }
}
