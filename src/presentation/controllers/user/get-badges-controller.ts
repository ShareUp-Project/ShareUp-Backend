import { GetAllBadges } from "@/domain/usecases";
import { ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class GetBadgesController implements Controller {
  constructor(private readonly getAllBadges: GetAllBadges) {}

  async handle(request: GetBadgesController.Request): Promise<HttpResponse> {
    try {
      const badges = await this.getAllBadges.getAllBadges({ userId: request.identity });
      return ok(badges);
    } catch (e) {
      return serverError(e);
    }
  }
}

export namespace GetBadgesController {
  export type Request = {
    identity: string;
  };
}
