import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'product_images' })
export class ProductImage {
  @PrimaryColumn({ name: 'id', length: 100, nullable: false })
  id: string;

  @Column({ name: 'url', length: 100, nullable: false })
  url: string;

  @Column({ name: 'description', length: 100, nullable: false })
  description: string;
}
