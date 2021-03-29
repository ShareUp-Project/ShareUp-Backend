import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn({ length: 45 })
  id: string;

  @Column({ length: 11, type: "char" })
  phone: string;

  @Column({ length: 50 })
  password: string;

  @Column({ length: 10 })
  nickname: string;
}
