import { CancleScrap } from "@/domain/usecases";
import { ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class CancleScrapController implements Controller {
  constructor(private readonly cancleScrap: CancleScrap) {}

  async handle(request: CancleScrapController.Request): Promise<HttpResponse> {
    const { id, identity } = request;
    try {
      await this.cancleScrap.cancle({ id, userId: identity });
      return ok({ message: "success" });
    } catch (e) {
      return serverError(e);
    }
  }
}

export namespace CancleScrapController {
  export type Request = {
    id: string;
    identity: string;
  };
}
