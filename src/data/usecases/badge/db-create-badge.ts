import { CreateBadgeRepository } from "@/data/protocols";
import { CreateBadge } from "@/domain/usecases";

export class DbCreateBadge implements CreateBadge {
  constructor(private readonly createBadgeRepository: CreateBadgeRepository) {}

  async create(data: CreateBadge.Params): Promise<void> {
    await this.createBadgeRepository.create(data);
  }
}
