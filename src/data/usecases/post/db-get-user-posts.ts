import { GetUserPostsRepository } from "@/data/protocols";
import { GetUserPosts } from "@/domain/usecases";

export class DbGetUserPosts implements GetUserPosts {
  constructor(private readonly getUserPostsRepository: GetUserPostsRepository) {}

  async getUserPosts(data: GetUserPosts.Params): Promise<any> {
    return await this.getUserPostsRepository.getUserPosts(data);
  }
}
