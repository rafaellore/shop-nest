import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('product_features')
export class ProductFeature {
  @PrimaryColumn({ name: 'id', length: 100, nullable: false })
  id: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'description', length: 100, nullable: false })
  description: string;
}
