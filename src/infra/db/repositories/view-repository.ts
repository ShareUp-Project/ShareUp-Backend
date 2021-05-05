import { AddViewRepository, FindOneViewRepository } from "@/data/protocols";
import { View } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(View)
export class ViewRepository
  implements AddViewRepository, FindOneViewRepository {
  public async add(data: AddViewRepository.Params): Promise<void> {
    await getRepository(View)
      .createQueryBuilder("view")
      .insert()
      .into(View)
      .values(data)
      .execute();
  }

  public async findOne(
    data: FindOneViewRepository.Params
  ): Promise<FindOneViewRepository.Result> {
    return await getRepository(View)
      .createQueryBuilder("view")
      .where("userId = :userId", { userId: data.userId })
      .andWhere("postId = :postId", { postId: data.postId })
      .getOne();
  }
}
