import { ScrapPost } from "@/domain/usecases";
import { alreadyExistsData, ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class ScrapPostController implements Controller {
  constructor(private readonly scrapPost: ScrapPost) {}

  async handle(request: ScrapPostController.Request): Promise<HttpResponse> {
    try {
      await this.scrapPost.scrap({
        postId: request.id,
        userId: request.identity,
      });
      return ok({ message: "success" });
    } catch (e) {
      return alreadyExistsData();
    }
  }
}

export namespace ScrapPostController {
  export type Request = {
    id: string;
    identity: string;
  };
}
