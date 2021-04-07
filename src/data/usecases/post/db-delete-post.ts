import { DeletePostRepository } from "@/data/protocols";
import { DeletePost } from "@/domain/usecases";

export class DbDeletePost implements DeletePost {
  constructor(private readonly deletePostRepository: DeletePostRepository) {}

  async delete(data: DeletePost.Params): Promise<void> {
    await this.deletePostRepository.delete(data);
  }
}
