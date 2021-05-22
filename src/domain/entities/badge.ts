import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Badge {
  @PrimaryColumn({ length: 45, name: "user_id" })
  userId: string;

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
}
