import { SetBadgeRepository } from "@/data/protocols";
import { SetBadge } from "@/domain/usecases";

export class DbSetBadge implements SetBadge {
  constructor(private readonly setBadgeRepository: SetBadgeRepository) {}

  async setBadge(data: SetBadge.Params): Promise<void> {
    await this.setBadgeRepository.setBadge(data);
  }
}
