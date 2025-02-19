import { Entity, Column } from 'typeorm';

@Entity('product_features')
export class ProductFeature {
  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'description', length: 100, nullable: false })
  description: string;
}
