import {
  CancleScrapRepository,
  ScrapPostRepository,
} from "@/data/protocols/db/scrap";
import { Scrap } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Scrap)
export class ScrapRepository
  implements ScrapPostRepository, CancleScrapRepository {
  public async scrap(data: ScrapPostRepository.Params) {
    await getRepository(Scrap)
      .createQueryBuilder("scrap")
      .insert()
      .into(Scrap)
      .values(data)
      .execute();
  }

  public async cancle(data: CancleScrapRepository.Params): Promise<void> {
    await getRepository(Scrap)
      .createQueryBuilder("scrap")
      .delete()
      .from(Scrap)
      .where("userId = :userId", { userId: data.userId })
      .andWhere("postId = :postId", { postId: data.id })
      .execute();
  }
}
