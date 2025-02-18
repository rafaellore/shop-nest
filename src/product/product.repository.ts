import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository {
  private products = [] as ProductEntity[];

  create(product: ProductEntity) {
    const createdProduct = this.products.push(product);
    return createdProduct;
  }

  list() {
    return this.products;
  }

  findById(id: string) {
    return this.products.find((product) => product.id === id);
  }

  remove(id: string) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  update(id: string, updateData: Partial<ProductEntity>) {
    const product = this.findById(id);

    Object.entries(updateData).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      if (!product) throw new Error('Produto não encontrado');

      if (product) product[key] = value;
    });

    return product;
  }
}
