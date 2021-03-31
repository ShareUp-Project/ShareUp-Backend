import { MakeCode, SendMessage, SetAuthRepository } from "@/data/protocols";
import { SendCode } from "@/domain/usecase";

export class DbSendCode implements SendCode {
  constructor(
    private readonly setAuthRepository: SetAuthRepository,
    private readonly makeCode: MakeCode,
    private readonly sendMessage: SendMessage
  ) {}

  send(phone: string) {
    const code = this.makeCode.makeCode();
    this.setAuthRepository.setAuthCode({ phone, code });
    this.sendMessage.send(phone, code);
  }
}
