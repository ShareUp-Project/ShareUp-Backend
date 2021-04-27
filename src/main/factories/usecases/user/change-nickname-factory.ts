import { DbChangeNickname } from "@/data/usecases";
import { ChangeNickname } from "@/domain/usecases";
import { UserRepository } from "@/infra/db";

export const makeDbChangeNickname = (): ChangeNickname => {
  const changeNicknameRepository = new UserRepository();
  return new DbChangeNickname(changeNicknameRepository);
};
