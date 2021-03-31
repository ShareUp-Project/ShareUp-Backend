import { DbCheckCode } from "@/data/usecases";
import { CheckCode } from "@/domain/usecases";
import { RedisRepository } from "@/infra/db/redis/redis-repository";

export const makeDbCheckCode = (): CheckCode => {
  const redidRepsitory = new RedisRepository();
  return new DbCheckCode(redidRepsitory);
};
