import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Post, Scrap, View, WeeklyView } from "@/domain/entities";

export enum BadgeCategory {
  DEFAULT = "default",
  FIRST = "first",
  PAPER = "paper",
  PLASTIC = "plastic",
  GLASS = "glass",
  STYROFOAM = "styrofoam",
  VINYL = "vinyl",
  CAN = "can",
  CLOTHING = "clothing",
}

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

  @Column({ type: "enum", enum: BadgeCategory, default: BadgeCategory.DEFAULT, name: "badge_category" })
  badgeCategory: BadgeCategory;

  @Column({ nullable: false, default: 0, name: "badge_level" })
  badgeLevel: number;

  @OneToMany((type) => Post, (post) => post.user)
  posts!: Post[];

  @OneToMany((type) => Scrap, (scrap) => scrap.user)
  scraps!: Scrap[];

  @OneToMany((type) => View, (view) => view.post)
  views!: Scrap[];

  @OneToMany((type) => WeeklyView, (weeklyView) => weeklyView.post)
  weeklyViews!: WeeklyView[];
}
