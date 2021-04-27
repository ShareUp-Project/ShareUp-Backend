import { DbGetNickname } from "@/data/usecases";
import { GetNickname } from "@/domain/usecases";
import { UserRepository } from "@/infra/db";

export const makeDbGetNickname = (): GetNickname => {
  const getNicknameRepository = new UserRepository();
  return new DbGetNickname(getNicknameRepository);
};
