import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Post } from "@/domain/entities";

@Entity()
export class Hashtag {
  @PrimaryColumn({ length: 45 })
  id: string;

  @Column({ nullable: false })
  tag: string;

  @Column({ name: "post_id", length: 45 })
  postId: string;

  @ManyToOne((type) => Post, (post) => post.id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "post_id" })
  post: Post;
}
