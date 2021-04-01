import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn({ length: 45 })
  id: string;

  @Column({ length: 11, type: "char", unique: true, nullable: false })
  phone: string;

  @Column({ length: 80, nullable: false })
  password: string;

  @Column({ length: 10, unique: true, nullable: false })
  nickname: string;
}
