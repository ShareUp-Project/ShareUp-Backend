import {
  GetEditorPostsRepository,
  WriteEditorPostRepository,
} from "@/data/protocols";
import { EditorPost } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(EditorPost)
export class EditorPostRepository
  implements WriteEditorPostRepository, GetEditorPostsRepository {
  async write(data: WriteEditorPostRepository.Params): Promise<void> {
    await getRepository(EditorPost)
      .createQueryBuilder("editor_post")
      .insert()
      .into(EditorPost)
      .values(data)
      .execute();
  }

  async getEditorPosts(data: GetEditorPostsRepository.Params): Promise<any> {
    return await getRepository(EditorPost)
      .createQueryBuilder("editor_post")
      .offset(data.page * 10)
      .limit(10)
      .getMany();
  }
}
