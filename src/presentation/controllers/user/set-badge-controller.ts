import { BadgeCategory } from "@/domain/entities";
import { SetBadge } from "@/domain/usecases";
import { ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class SetBadgeController implements Controller {
  constructor(private readonly setBadge: SetBadge) {}

  async handle(request: SetBadgeController.Request): Promise<HttpResponse> {
    try {
      await this.setBadge.setBadge({ ...request, userId: request.identity });
      return ok({ message: "success" });
    } catch (e) {
      return serverError(e);
    }
  }
}

export namespace SetBadgeController {
  export type Request = {
    identity: string;
    category: BadgeCategory;
    level: number;
  };
}
