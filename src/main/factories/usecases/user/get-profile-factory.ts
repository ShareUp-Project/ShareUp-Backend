import { DbGetProfile } from "@/data/usecases";
import { GetProfile } from "@/domain/usecases";
import { UserRepository } from "@/infra/db";

export const makeDbGetProfile = (): GetProfile => {
  const getProfileRepository = new UserRepository();
  return new DbGetProfile(getProfileRepository);
};
