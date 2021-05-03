import { GetEditorPosts } from "@/domain/usecases";
import { ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class GetEditorPostsController implements Controller {
  constructor(private readonly getEditorPosts: GetEditorPosts) {}

  async handle(
    request: GetEditorPostsController.Request
  ): Promise<HttpResponse> {
    try {
      const data = await this.getEditorPosts.getEditorPosts({
        page: Number(request.page),
      });
      return ok({ data });
    } catch (e) {
      return serverError(e);
    }
  }
}

export namespace GetEditorPostsController {
  export type Request = {
    page: string;
  };
}
