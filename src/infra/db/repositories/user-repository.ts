import {
  ChangeNicknameRepository,
  ChangePasswordRepository,
  CreateUserRepository,
  FindUserRepository,
  GetNicknameRepository,
} from "@/data/protocols";
import { User } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(User)
export class UserRepository
  implements
    CreateUserRepository,
    FindUserRepository,
    ChangePasswordRepository,
    GetNicknameRepository,
    ChangeNicknameRepository {
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

  public async findOneByNickname(
    nickname: string
  ): Promise<FindUserRepository.Result> {
    return await getRepository(User)
      .createQueryBuilder("user")
      .where("nickname = :nickname", { nickname })
      .getOne();
  }

  public async change(data: ChangePasswordRepository.Params): Promise<void> {
    await getRepository(User)
      .createQueryBuilder("user")
      .update(User)
      .set({ password: data.password })
      .where("phone = :phone", { phone: data.phone })
      .execute();
  }

  public async getNickname(
    data: GetNicknameRepository.Params
  ): Promise<GetNicknameRepository.Result> {
    return await getRepository(User)
      .createQueryBuilder("user")
      .select("user.nickname")
      .where("id = :id", { id: data.userId })
      .getOne();
  }

  public async changeNickname(
    data: ChangeNicknameRepository.Params
  ): Promise<void> {
    await getRepository(User)
      .createQueryBuilder("user")
      .update(User)
      .set({ nickname: data.nickname })
      .where("id = :userId", { userId: data.userId })
      .execute();
  }
}
