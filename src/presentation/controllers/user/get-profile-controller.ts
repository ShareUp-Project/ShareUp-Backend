import { GetProfile } from "@/domain/usecases";
import { ok, notFound } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class GetProfileController implements Controller {
  constructor(private readonly getProfile: GetProfile) {}

  async handle(request: GetProfileController.Request): Promise<HttpResponse> {
    try {
      if (!request.id) request.id = request.identity;
      const user = await this.getProfile.getProfile({ userId: request.id });
      const { nickname, badgeCategory, badgeLevel } = user;
      return ok({ nickname, badgeCategory, badgeLevel });
    } catch (e) {
      return notFound();
    }
  }
}

export namespace GetProfileController {
  export type Request = {
    id: string;
    identity: string;
  };
}
