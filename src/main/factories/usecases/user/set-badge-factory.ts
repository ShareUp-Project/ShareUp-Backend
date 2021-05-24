import { DbSetBadge } from "@/data/usecases";
import { SetBadge } from "@/domain/usecases";
import { UserRepository } from "@/infra/db";

export const makeDbSetBadge = (): SetBadge => {
  const setBadgeRepository = new UserRepository();
  return new DbSetBadge(setBadgeRepository);
};
