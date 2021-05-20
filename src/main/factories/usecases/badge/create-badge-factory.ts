import { DbCreateBadge } from "@/data/usecases";
import { CreateBadge } from "@/domain/usecases";
import { BadgeRepository } from "@/infra/db";

export const makeDbCreateBadge = (): CreateBadge => {
  const createBadgeRepository = new BadgeRepository();
  return new DbCreateBadge(createBadgeRepository);
};
