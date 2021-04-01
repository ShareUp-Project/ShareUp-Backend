import { FindUser } from "@/domain/usecases";

export interface FindUserRepository {
  findOne: (phone: string) => Promise<FindUserRepository.Result>;
  findOneByNickname: (nickname: string) => Promise<FindUserRepository.Result>;
}

export namespace FindUserRepository {
  export type Result = FindUser.Result;
}
