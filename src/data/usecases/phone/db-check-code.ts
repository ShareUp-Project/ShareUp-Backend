import { GetAuthRepository } from "@/data/protocols";
import { CheckCode } from "@/domain/usecases";

export class DbCheckCode implements CheckCode {
  constructor(private readonly getAuthRepository: GetAuthRepository) {}

  check(data: CheckCode.Params): boolean {
    const code = this.getAuthRepository.getAuthCode(data.phone);
    return code === data.code;
  }
}
