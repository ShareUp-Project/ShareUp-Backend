import { GetPostsRepository } from "@/data/protocols";
import { GetPosts } from "@/domain/usecases";

export class DbGetPosts implements GetPosts {
  constructor(private readonly getPostsRepository: GetPostsRepository) {}

  async get(data: GetPosts.Params): Promise<any> {
    return await this.getPostsRepository.get(data);
  }
}
