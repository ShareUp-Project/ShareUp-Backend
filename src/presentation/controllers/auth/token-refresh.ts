import { TokenRefresh } from "@/domain/usecases";
import { ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class TokenRefreshController implements Controller {
  constructor(private readonly tokenRefresh: TokenRefresh) {}

  async handle(request: TokenRefreshController.Request): Promise<HttpResponse> {
    try {
      const tokens = await this.tokenRefresh.refresh(request);
      return ok(tokens);
    } catch (e) {
      return serverError(e);
    }
  }
}

export namespace TokenRefreshController {
  export type Request = {
    identity: string;
  };
}
