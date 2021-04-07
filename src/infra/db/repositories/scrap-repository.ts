import { ScrapPostRepository } from "@/data/protocols/db/scrap";
import { Scrap } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Scrap)
export class ScrapRepository implements ScrapPostRepository {
  public async scrap(data: ScrapPostRepository.Params) {
    await getRepository(Scrap)
      .createQueryBuilder("scrap")
      .insert()
      .into(Scrap)
      .values(data)
      .execute();
  }
}
