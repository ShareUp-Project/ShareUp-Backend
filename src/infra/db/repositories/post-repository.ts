import {
  DeletePostRepository,
  FindPostRepository,
  GetDetailPostRepository,
  GetPostsRepository,
  GetScrapPostsRepository,
  WritePostRepository,
} from "@/data/protocols";
import { Post } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Post)
export class PostRepository
  implements
    WritePostRepository,
    GetPostsRepository,
    DeletePostRepository,
    FindPostRepository,
    GetScrapPostsRepository,
    GetDetailPostRepository {
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

  public async delete(data: DeletePostRepository.Params): Promise<void> {
    await getRepository(Post)
      .createQueryBuilder("post")
      .delete()
      .from(Post)
      .where("id = :id", { id: data.id })
      .andWhere("userId = :userId", { userId: data.userId })
      .execute();
  }

  public async findOne(
    data: FindPostRepository.Params
  ): Promise<FindPostRepository.Result> {
    return await getRepository(Post)
      .createQueryBuilder("post")
      .where("id = :id", { id: data.id })
      .getOne();
  }

  public async getScrap(data: GetScrapPostsRepository.Params): Promise<any> {
    return await getRepository(Post)
      .createQueryBuilder("post")
      .innerJoinAndSelect("post.user", "user")
      .innerJoinAndSelect("post.images", "image")
      .innerJoinAndSelect("post.hashtags", "hashtag")
      .innerJoinAndSelect("post.scraps", "scrap", "scrap.userId = :userId", {
        userId: data.userId,
      })
      .skip(data.page * 7)
      .take(7)
      .getMany();
  }

  public async getDetail(data: GetDetailPostRepository.Params): Promise<any> {
    return await getRepository(Post)
      .createQueryBuilder("post")
      .innerJoinAndSelect("post.user", "user")
      .innerJoinAndSelect("post.images", "image")
      .innerJoinAndSelect("post.hashtags", "hashtag")
      .innerJoinAndSelect("post.scraps", "scrap")
      .where("post.id = :id", { id: data.id })
      .getOne();
  }
}
