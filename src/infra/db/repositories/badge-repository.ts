import { CreateBadgeRepository, GetAllBadgesRepository, UpgradeBadgeRepository } from "@/data/protocols";
import { Badge } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Badge)
export class BadgeRepository implements CreateBadgeRepository, GetAllBadgesRepository, UpgradeBadgeRepository {
  public async create(data: CreateBadgeRepository.Params): Promise<void> {
    await getRepository(Badge).createQueryBuilder("badge").insert().into(Badge).values(data).execute();
  }

  public async getAllBadges(data: GetAllBadgesRepository.Params): Promise<GetAllBadgesRepository.Result> {
    return await getRepository(Badge)
      .createQueryBuilder("badge")
      .where("badge.user_id = :userId", { userId: data.userId })
      .getOne();
  }

  public async upgrade(data: UpgradeBadgeRepository.Params): Promise<void> {
    const repo = await getRepository(Badge);
    const badge = await repo.findOne(data.userId);
    badge[data.category] = data.level;
    await repo.save(badge);
  }
}
