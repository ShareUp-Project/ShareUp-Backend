import { DbGetAllBadges } from "@/data/usecases";
import { GetAllBadges } from "@/domain/usecases";
import { BadgeRepository } from "@/infra/db";

export const makeDbGetAllBadges = (): GetAllBadges => {
  const getAllBadgesRepository = new BadgeRepository();
  return new DbGetAllBadges(getAllBadgesRepository);
};
