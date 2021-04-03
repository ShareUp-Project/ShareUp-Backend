import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Post } from "@/domain/entities";

@Entity()
export class Image {
  @PrimaryColumn()
  id: string;

  @Column({ name: "post_id", length: 45 })
  postId: string;

  @ManyToOne((type) => Post, (post) => post.id, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "post_id" })
  post!: Post;
}
