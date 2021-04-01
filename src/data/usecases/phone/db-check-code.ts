import { GetAuthRepository } from "@/data/protocols";
import { CheckCode } from "@/domain/usecases";

export class DbCheckCode implements CheckCode {
  constructor(private readonly getAuthRepository: GetAuthRepository) {}

  async check(data: CheckCode.Params): Promise<boolean> {
    try {
      const code = await this.getAuthRepository.getAuthCode(data.phone);
      return code === data.code;
    } catch (e) {
      return false;
    }
  }
}
