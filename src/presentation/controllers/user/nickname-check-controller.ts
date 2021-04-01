import { FindUser } from "@/domain/usecases";
import { alreadyExistsData, ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class NicknameCheckController implements Controller {
  constructor(private readonly findUser: FindUser) {}

  async handle(
    request: NicknameCheckController.Request
  ): Promise<HttpResponse> {
    try {
      const user = await this.findUser.findOneByNickname(request.nickname);
      if (user) return alreadyExistsData();
      return ok({ message: "success" });
    } catch (e) {
      return serverError(e);
    }
  }
}

export namespace NicknameCheckController {
  export type Request = {
    nickname: string;
  };
}
