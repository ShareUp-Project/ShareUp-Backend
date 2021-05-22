import { DbUpgradeBadge } from "@/data/usecases";
import { UpgradeBadge } from "@/domain/usecases";
import { BadgeRepository } from "@/infra/db";

export const makeDbUpgradeBadge = (): UpgradeBadge => {
  const upgradeBadgeRepository = new BadgeRepository();
  return new DbUpgradeBadge(upgradeBadgeRepository);
};
