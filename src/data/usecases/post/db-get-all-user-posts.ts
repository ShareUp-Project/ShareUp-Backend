import { GetAllUserPostsRepository } from "@/data/protocols";
import { GetAllUserPosts } from "@/domain/usecases";

export class DbGetAllUserPosts implements GetAllUserPosts {
  constructor(private readonly getAllUserPostsRepository: GetAllUserPostsRepository) {}

  async getAllUserPosts(data: GetAllUserPosts.Params): Promise<any> {
    return this.getAllUserPostsRepository.getAllUserPosts(data);
  }
}
