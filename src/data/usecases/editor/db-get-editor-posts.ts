import { GetEditorPostsRepository } from "@/data/protocols";
import { GetEditorPosts } from "@/domain/usecases";

export class DbGetEditorPosts implements GetEditorPosts {
  constructor(private readonly getEditorPostsRepository: GetEditorPostsRepository) {}

  async getEditorPosts(data: GetEditorPosts.Params): Promise<any> {
    return this.getEditorPostsRepository.getEditorPosts(data);
  }
}
