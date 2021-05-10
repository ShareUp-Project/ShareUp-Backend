import { SearchTagPostsRepository } from "@/data/protocols";
import { SearchTagPosts } from "@/domain/usecases";

export class DbSearchTagPosts implements SearchTagPosts {
  constructor(private readonly searchTagPostsRepository: SearchTagPostsRepository) {}
  async searchPosts(data: SearchTagPosts.Params): Promise<any> {
    return await this.searchTagPostsRepository.searchPosts(data);
  }
}
