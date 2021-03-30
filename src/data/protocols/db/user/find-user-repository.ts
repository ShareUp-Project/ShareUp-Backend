import { FindUser } from "@/domain/usecase";

export interface FindUserRepository {
  findOne: (phone: string) => Promise<FindUserRepository.Result>;
}

export namespace FindUserRepository {
  export type Result = FindUser.Result;
}
