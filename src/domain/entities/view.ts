import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Post } from "./post";
import { User } from "./user";

@Entity()
export class View {
  @PrimaryColumn({ name: "user_id", length: 45 })
  userId: string;

  @PrimaryColumn({ name: "post_id", length: 45 })
  postId: string;

  @ManyToOne((type) => User, (user) => user.id, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user!: User;

  @ManyToOne((type) => Post, (post) => post.id, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "post_id" })
  post!: Post;
}
