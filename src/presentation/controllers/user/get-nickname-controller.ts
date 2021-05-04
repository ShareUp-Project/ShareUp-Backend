import { GetNickname } from "@/domain/usecases";
import { ok, notFound } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class GetNicknameController implements Controller {
  constructor(private readonly getNickname: GetNickname) {}

  async handle(request: GetNicknameController.Request): Promise<HttpResponse> {
    try {
      if (!request.id) request.id = request.identity;
      const user = await this.getNickname.getNickname({ userId: request.id });
      return ok(user);
    } catch (e) {
      return notFound();
    }
  }
}

export namespace GetNicknameController {
  export type Request = {
    id: string;
    identity: string;
  };
}
