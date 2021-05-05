import {
  AddWeeklyViewRepository,
  FindOneWeeklyViewRepository,
} from "@/data/protocols";
import { WeeklyView } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(WeeklyView)
export class WeeklyViewRepository
  implements AddWeeklyViewRepository, FindOneWeeklyViewRepository {
  public async add(data: AddWeeklyViewRepository.Params): Promise<void> {
    await getRepository(WeeklyView)
      .createQueryBuilder("weekly_view")
      .insert()
      .into(WeeklyView)
      .values(data)
      .execute();
  }

  public async findOne(
    data: FindOneWeeklyViewRepository.Params
  ): Promise<FindOneWeeklyViewRepository.Result> {
    return await getRepository(WeeklyView)
      .createQueryBuilder("weekly_view")
      .where("userId = :userId", { userId: data.userId })
      .andWhere("postId = :postId", { postId: data.postId })
      .getOne();
  }
}
