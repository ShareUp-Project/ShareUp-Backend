import { CreateUserRepository, FindUserRepository } from "@/data/protocols";
import { User } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(User)
export class UserRepository
  implements CreateUserRepository, FindUserRepository {
  public async create(data: CreateUserRepository.Params): Promise<void> {
    await getRepository(User)
      .createQueryBuilder("user")
      .insert()
      .into(User)
      .values(data)
      .execute();
  }

  public async findOne(phone: string): Promise<FindUserRepository.Result> {
    return await getRepository(User)
      .createQueryBuilder("user")
      .where("phone = :phone", { phone })
      .getOne();
  }
}
