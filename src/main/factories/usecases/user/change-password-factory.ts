import { DbChangePassword } from "@/data/usecases";
import { ChangePassword } from "@/domain/usecases";
import { BcryptAdapter } from "@/infra/crypto";
import { UserRepository } from "@/infra/db";

export const makeDbChangePassword = (): ChangePassword => {
  const SALT = 12;
  const changePasswordRepository = new UserRepository();
  const bcryptAdapter = new BcryptAdapter(SALT);
  return new DbChangePassword(changePasswordRepository, bcryptAdapter);
};
