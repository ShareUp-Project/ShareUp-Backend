import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "@/domain/entities";

@Entity()
export class Badge {
  @PrimaryColumn({ length: 45, name: "user_id" })
  userId: string;

  @Column({ default: 1 })
  default: number;

  @Column({ default: 0 })
  first: number;

  @Column({ default: 0 })
  paper: number;

  @Column({ default: 0 })
  plastic: number;

  @Column({ default: 0 })
  glass: number;

  @Column({ default: 0 })
  styrofoam: number;

  @Column({ default: 0 })
  vinyl: number;

  @Column({ default: 0 })
  can: number;

  @Column({ default: 0 })
  clothing: number;

  @OneToOne(() => User, { onUpdate: "CASCADE", onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;
}
