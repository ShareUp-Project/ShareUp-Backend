import { FindPostRepository } from "@/data/protocols";
import { FindPost } from "@/domain/usecases";

export class DbFindPost implements FindPost {
  constructor(private readonly findPostRepository: FindPostRepository) {}

  async findOne(data: FindPost.Params): Promise<FindPost.Result> {
    return await this.findPostRepository.findOne(data);
  }
}
