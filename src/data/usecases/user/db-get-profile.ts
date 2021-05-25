import { GetProfileRepository } from "@/data/protocols";
import { GetProfile } from "@/domain/usecases";

export class DbGetProfile implements GetProfile {
  constructor(private readonly getProfileRepository: GetProfileRepository) {}

  async getProfile(data: GetProfile.Params): Promise<GetProfile.Result> {
    return await this.getProfileRepository.getProfile(data);
  }
}
