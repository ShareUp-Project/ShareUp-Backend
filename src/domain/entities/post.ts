import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { User, Image, Hashtag } from "@/domain/entities";

@Entity()
export class Post {
  @PrimaryColumn({ length: 45 })
  id: string;

  @Column({ length: 500 })
  content: string;

  @Column({ name: "user_id", length: 45 })
  userId: string;

  @ManyToOne((type) => User, (user) => user.id, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user!: User;

  @OneToMany((type) => Image, (image) => image.post)
  images!: Image[];

  @OneToMany((type) => Hashtag, (hashtag) => hashtag.post)
  hashtags!: Hashtag[];
}
