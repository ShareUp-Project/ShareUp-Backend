import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { User, Image, Hashtag, Scrap } from "@/domain/entities";

export enum Category {
  PAPER = "paper",
  PLASTIC = "plastic",
  GLASS = "glass",
  STYROFOAM = "styrofoam",
  VINYL = "vinyl",
  CAN = "can",
  CLOTHING = "clothing",
  ETC = "etc",
}

@Entity()
export class Post {
  @PrimaryColumn({ length: 45 })
  id: string;

  @Column({ length: 500 })
  content: string;

  @Column({ name: "user_id", length: 45 })
  userId: string;

  @Column({ type: "enum", enum: Category })
  category: Category;

  @Column({ default: 0 })
  views: number;

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

  @OneToMany((type) => Scrap, (scrap) => scrap.post)
  scraps!: Scrap[];
}