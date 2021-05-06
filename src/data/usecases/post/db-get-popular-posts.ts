import { GetPopularPostsRepository } from "@/data/protocols";
import { GetPopularPosts } from "@/domain/usecases";

export class DbGetPopularPosts implements GetPopularPosts {
  constructor(
    private readonly getPopularPostsRepository: GetPopularPostsRepository
  ) {}

  async getPopular(): Promise<any> {
    return await this.getPopularPostsRepository.getPopular();
  }
}
