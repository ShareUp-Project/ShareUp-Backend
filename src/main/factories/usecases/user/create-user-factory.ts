import { DbCreateUser } from "@/data/usecases";
import { CreateUser } from "@/domain/usecase";
import { BcryptAdapter } from "@/infra/crypto";
import { UserRepository } from "@/infra/db";
import { UuidAdapter } from "@/infra/uuid";

export const makeDbCreateUser = (): CreateUser => {
  const SALT = 12;
  const createUserRepository = new UserRepository();
  const hasher = new BcryptAdapter(SALT);
  const makeId = new UuidAdapter();
  return new DbCreateUser(createUserRepository, hasher, makeId);
};
