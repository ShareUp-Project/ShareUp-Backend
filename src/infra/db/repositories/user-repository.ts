import {
  ChangeNicknameRepository,
  ChangePasswordRepository,
  CreateUserRepository,
  FindUserRepository,
  GetProfileRepository,
  SetBadgeRepository,
} from "@/data/protocols";
import { User } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(User)
export class UserRepository
  implements
    CreateUserRepository,
    FindUserRepository,
    ChangePasswordRepository,
    GetProfileRepository,
    ChangeNicknameRepository,
    SetBadgeRepository
{
  public async create(data: CreateUserRepository.Params): Promise<void> {
    await getRepository(User).createQueryBuilder("user").insert().into(User).values(data).execute();
  }

  public async findOne(phone: string): Promise<FindUserRepository.Result> {
    return await getRepository(User).createQueryBuilder("user").where("phone = :phone", { phone }).getOne();
  }

  public async findOneByNickname(nickname: string): Promise<FindUserRepository.Result> {
    return await getRepository(User).createQueryBuilder("user").where("nickname = :nickname", { nickname }).getOne();
  }

  public async change(data: ChangePasswordRepository.Params): Promise<void> {
    await getRepository(User)
      .createQueryBuilder("user")
      .update(User)
      .set({ password: data.password })
      .where("phone = :phone", { phone: data.phone })
      .execute();
  }

  public async getProfile(data: GetProfileRepository.Params): Promise<GetProfileRepository.Result> {
    return await getRepository(User).createQueryBuilder("user").where("id = :id", { id: data.userId }).getOne();
  }

  public async changeNickname(data: ChangeNicknameRepository.Params): Promise<void> {
    await getRepository(User)
      .createQueryBuilder("user")
      .update(User)
      .set({ nickname: data.nickname })
      .where("id = :userId", { userId: data.userId })
      .execute();
  }

  public async setBadge(data: SetBadgeRepository.Params): Promise<void> {
    await getRepository(User)
      .createQueryBuilder("user")
      .update(User)
      .set({ badgeCategory: data.category, badgeLevel: data.level })
      .where("id = :userId", { userId: data.userId })
      .execute();
  }
}
