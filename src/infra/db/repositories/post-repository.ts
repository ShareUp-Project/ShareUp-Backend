import { GetPostsRepository, WritePostRepository } from "@/data/protocols";
import { Post } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Post)
export class PostRepository implements WritePostRepository, GetPostsRepository {
  public async write(data: WritePostRepository.Params): Promise<void> {
    await getRepository(Post)
      .createQueryBuilder("post")
      .insert()
      .into(Post)
      .values(data)
      .execute();
  }

  public async get(data: GetPostsRepository.Params): Promise<any> {
    return await getRepository(Post)
      .createQueryBuilder("post")
      .leftJoinAndSelect("post.user", "user")
      .leftJoinAndSelect("post.images", "image")
      .leftJoinAndSelect("post.hashtags", "hashtag")
      .leftJoinAndSelect("post.scraps", "scrap")
      .skip(data.page * 7)
      .take(7)
      .getMany();
  }
}
