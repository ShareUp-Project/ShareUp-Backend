import { CreateBadgeRepository } from "@/data/protocols";
import { Badge } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Badge)
export class BadgeRepository implements CreateBadgeRepository {
  public async create(data: CreateBadgeRepository.Params): Promise<void> {
    await getRepository(Badge).createQueryBuilder("badge").insert().into(Badge).values(data).execute();
  }
}
