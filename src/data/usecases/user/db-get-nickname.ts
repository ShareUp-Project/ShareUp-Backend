import { GetNicknameRepository } from "@/data/protocols";
import { GetNickname } from "@/domain/usecases";

export class DbGetNickname implements GetNickname {
  constructor(private readonly getNicknameRepository: GetNicknameRepository) {}

  async getNickname(data: GetNickname.Params): Promise<GetNickname.Result> {
    return await this.getNicknameRepository.getNickname(data);
  }
}
