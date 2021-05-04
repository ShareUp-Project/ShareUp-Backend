import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "editor_post" })
export class EditorPost {
  @PrimaryColumn({ length: 45 })
  id: string;

  @Column({ length: 50 })
  title: string;

  @Column({ length: 1000 })
  content: string;

  @Column({ length: 100, nullable: true })
  image: string;
}
