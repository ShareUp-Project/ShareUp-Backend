import { DbFindUser } from "@/data/usecases";
import { FindUser } from "@/domain/usecases";
import { UserRepository } from "@/infra/db";

export const makeDbFindUser = (): FindUser => {
  const findUserRepository = new UserRepository();
  return new DbFindUser(findUserRepository);
};
