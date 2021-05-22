import { UpgradeBadgeRepository } from "@/data/protocols";
import { UpgradeBadge } from "@/domain/usecases";

export class DbUpgradeBadge implements UpgradeBadge {
  constructor(private readonly upgradeBadgeRepository: UpgradeBadgeRepository) {}

  async upgrade(data: UpgradeBadge.Params): Promise<void> {
    await this.upgradeBadgeRepository.upgrade(data);
  }
}
