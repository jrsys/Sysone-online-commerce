import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class UserModel {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "varchar", length: 200 })
  name: string;

  @Column({ type: "varchar", length: 200 })
  email: string;

  @Column({ type: "varchar", length: 20, select: false })
  password: string;
}
