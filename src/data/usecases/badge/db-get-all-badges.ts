import { GetAllBadgesRepository } from "@/data/protocols";
import { GetAllBadges } from "@/domain/usecases";

export class DbGetAllBadges implements GetAllBadges {
  constructor(private readonly getAllBadgesRepository: GetAllBadgesRepository) {}

  async getAllBadges(data: GetAllBadges.Params): Promise<GetAllBadges.Result> {
    return this.getAllBadgesRepository.getAllBadges(data);
  }
}
