import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class ProductModel {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "varchar", length: 200 })
  name: string;

  @Column({ type: "float" })
  price: number;

  @Column({ type: "varchar", length: 500 })
  description: string;
}
