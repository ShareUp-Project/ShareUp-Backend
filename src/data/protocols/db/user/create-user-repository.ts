import { CreateUser } from "@/domain/usecases";

export interface CreateUserRepository {
  create: (data: CreateUserRepository.Params) => Promise<void>;
}

export namespace CreateUserRepository {
  export type Params = CreateUser.Params;
}
