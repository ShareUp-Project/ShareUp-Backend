import { GetScrapPostsRepository } from "@/data/protocols";
import { GetScrapPosts } from "@/domain/usecases";

export class DbGetScrapPosts implements GetScrapPosts {
  constructor(private readonly getScrapPostsRepository: GetScrapPostsRepository) {}

  async getScrap(data: GetScrapPosts.Params): Promise<any> {
    return await this.getScrapPostsRepository.getScrap(data);
  }
}
