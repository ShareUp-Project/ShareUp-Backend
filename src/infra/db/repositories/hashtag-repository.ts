import { AddHashtagRepository } from "@/data/protocols";
import { Hashtag } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Hashtag)
export class HashtagRepository implements AddHashtagRepository {
  public async add(data: AddHashtagRepository.Params) {
    await getRepository(Hashtag)
      .createQueryBuilder("hashtag")
      .insert()
      .into(Hashtag)
      .values(data)
      .execute();
  }
}
