import { DbAuthentication } from "@/data/usecases";
import { Authentication } from "@/domain/usecases";
import { BcryptAdapter } from "@/infra/crypto";
import { UserRepository } from "@/infra/db";
import { JwtAdapter } from "@/infra/jwt";
import env from "@/main/config/env";

export const makeDbAuthentication = (): Authentication => {
  const SALT = 12;
  const ACCESS_SECRET = env.jwt.access;
  const REFRESH_SECRET = env.jwt.refresh;
  const findUserRepository = new UserRepository();
  const bcryptAdapter = new BcryptAdapter(SALT);
  const jwtAdapter = new JwtAdapter(ACCESS_SECRET, REFRESH_SECRET);
  return new DbAuthentication(findUserRepository, bcryptAdapter, jwtAdapter);
};
