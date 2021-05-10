import { ChangeNicknameRepository } from "@/data/protocols";
import { ChangeNickname } from "@/domain/usecases";

export class DbChangeNickname implements ChangeNickname {
  constructor(private readonly changeNicknameRepository: ChangeNicknameRepository) {}

  async changeNickname(data: ChangeNickname.Params): Promise<void> {
    await this.changeNicknameRepository.changeNickname(data);
  }
}
