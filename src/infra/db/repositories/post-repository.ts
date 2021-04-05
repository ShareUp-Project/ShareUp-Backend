import { WritePostRepository } from "@/data/protocols";
import { Post } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Post)
export class PostRepository implements WritePostRepository {
  public async write(data: WritePostRepository.Params): Promise<void> {
    await getRepository(Post)
      .createQueryBuilder("post")
      .insert()
      .into(Post)
      .values(data)
      .execute();
  }
}
