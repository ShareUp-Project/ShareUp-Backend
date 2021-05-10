import { GetDetailPostRepository } from "@/data/protocols";
import { GetDetailPost } from "@/domain/usecases";

export class DbGetDetailPost implements GetDetailPost {
  constructor(private readonly getDetailPostRepository: GetDetailPostRepository) {}

  async getDetail(data: GetDetailPost.Params): Promise<any> {
    return await this.getDetailPostRepository.getDetail(data);
  }
}
