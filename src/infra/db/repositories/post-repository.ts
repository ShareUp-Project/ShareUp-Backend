import {
  DeletePostRepository,
  FindPostRepository,
  GetDetailPostRepository,
  GetPopularPostsRepository,
  GetPostsRepository,
  GetScrapPostsRepository,
  GetUserPostsRepository,
  SearchTagPostsRepository,
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
    GetDetailPostRepository,
    SearchTagPostsRepository,
    GetUserPostsRepository,
    GetPopularPostsRepository {
  public async write(data: WritePostRepository.Params): Promise<void> {
    await getRepository(Post)
      .createQueryBuilder("post")
      .insert()
      .into(Post)
      .values(data)
      .execute();
  }

  public async get(data: GetPostsRepository.Params): Promise<any> {
    if (!data.category) {
      return await getRepository(Post)
        .createQueryBuilder("post")
        .leftJoinAndSelect("post.user", "user")
        .leftJoinAndSelect("post.images", "image")
        .leftJoinAndSelect("post.hashtags", "hashtag")
        .leftJoinAndSelect("post.scraps", "scrap")
        .leftJoinAndSelect("post.views", "view")
        .skip(data.page * 7)
        .take(7)
        .orderBy("post.createdAt", "DESC")
        .getMany();
    }
    return await getRepository(Post)
      .createQueryBuilder("post")
      .leftJoinAndSelect("post.user", "user")
      .leftJoinAndSelect("post.images", "image")
      .leftJoinAndSelect("post.hashtags", "hashtag")
      .leftJoinAndSelect("post.scraps", "scrap")
      .leftJoinAndSelect("post.views", "view")
      .where("post.category = :category", { category: data.category })
      .skip(data.page * 7)
      .take(7)
      .orderBy("post.createdAt", "DESC")
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
      .leftJoinAndSelect("post.user", "user")
      .leftJoinAndSelect("post.images", "image")
      .leftJoinAndSelect("post.hashtags", "hashtag")
      .leftJoinAndSelect("post.scraps", "scrap")
      .leftJoinAndSelect("post.views", "view")
      .where("scrap.user_id = :userId", { userId: data.userId })
      .skip(data.page * 7)
      .take(7)
      .orderBy("scrap.createdAt")
      .getMany();
  }

  public async getDetail(data: GetDetailPostRepository.Params): Promise<any> {
    return await getRepository(Post)
      .createQueryBuilder("post")
      .leftJoinAndSelect("post.user", "user")
      .leftJoinAndSelect("post.images", "image")
      .leftJoinAndSelect("post.scraps", "scrap")
      .leftJoinAndSelect("post.views", "view")
      .where("post.id = :id", { id: data.id })
      .getOne();
  }

  public async searchPosts(
    data: SearchTagPostsRepository.Params
  ): Promise<any> {
    const qb = await getRepository(Post)
      .createQueryBuilder("post")
      .leftJoinAndSelect("post.user", "user")
      .leftJoinAndSelect("post.images", "image")
      .leftJoinAndSelect("post.hashtags", "hashtag")
      .leftJoinAndSelect("post.scraps", "scrap")
      .leftJoinAndSelect("post.views", "view");

    return qb
      .where(
        "post.id IN" +
          qb
            .subQuery()
            .select("*")
            .from(
              "(" +
                (await getRepository(Post)
                  .createQueryBuilder("post")
                  .select("post.id")
                  .leftJoin("post.hashtags", "hashtag")
                  .where(
                    `hashtag.tag = "${data.word}" OR post.title like "%${data.word}%"`
                  )
                  .orderBy("post.createdAt", "DESC")
                  .skip(data.page * 7)
                  .limit(7)
                  .getQuery()) +
                ")",
              "tmp"
            )
            .getQuery()
      )
      .getMany();
  }

  public async getUserPosts(data: GetUserPostsRepository.Params): Promise<any> {
    const qb = await getRepository(Post)
      .createQueryBuilder("post")
      .leftJoinAndSelect("post.user", "user")
      .leftJoinAndSelect("post.images", "image")
      .leftJoinAndSelect("post.hashtags", "hashtag")
      .leftJoinAndSelect("post.scraps", "scrap")
      .leftJoinAndSelect("post.views", "view");
    return qb
      .where(
        "post.id IN" +
          qb
            .subQuery()
            .select("*")
            .from(
              "(" +
                (await getRepository(Post)
                  .createQueryBuilder("post1")
                  .select("post1.id")
                  .from(Post, "post")
                  .where(`post.user_id = "${data.userId}"`)
                  .skip(data.page * 7)
                  .limit(7)
                  .orderBy("post.createdAt", "DESC")
                  .getQuery()) +
                ")",
              "tmp"
            )
            .getQuery()
      )
      .getMany();
  }

  public async getPopular(): Promise<any> {
    return await getRepository(Post)
      .createQueryBuilder("post")
      .select("post.id")
      .addSelect("post.title")
      .addSelect("ifnull(count(weekly_view.post_id), 0)", "weekly_view")
      .leftJoinAndSelect("post.weeklyViews", "weekly_view")
      .groupBy("post.id, weekly_view.post_id")
      .orderBy("weekly_view", "DESC")
      .limit(4)
      .getMany();
  }
}
