import { ChangeNickname } from "@/domain/usecases";
import { ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class ChangeNicknameController implements Controller {
  constructor(private readonly changeNickname: ChangeNickname) {}

  async handle(
    request: ChangeNicknameController.Request
  ): Promise<HttpResponse> {
    try {
      await this.changeNickname.changeNickname({
        userId: request.identity,
        nickname: request.nickname,
      });
      return ok({ message: "success" });
    } catch (e) {
      return serverError(e);
    }
  }
}

export namespace ChangeNicknameController {
  export type Request = {
    identity: string;
    nickname: string;
  };
}
