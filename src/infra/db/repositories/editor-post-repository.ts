import { WriteEditorPostRepository } from "@/data/protocols";
import { EditorPost } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(EditorPost)
export class EditorPostRepository implements WriteEditorPostRepository {
  async write(data: WriteEditorPostRepository.Params): Promise<void> {
    await getRepository(EditorPost)
      .createQueryBuilder("editor_post")
      .insert()
      .into(EditorPost)
      .values(data)
      .execute();
  }
}
