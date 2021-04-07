import { DeletePost, FindPost } from "@/domain/usecases";
import { forbidden, ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class DeletePostController implements Controller {
  constructor(
    private readonly deletePost: DeletePost,
    private readonly findPost: FindPost
  ) {}

  async handle(request: DeletePostController.Request): Promise<HttpResponse> {
    try {
      const post = await this.findPost.findOne({ id: request.id });
      if (post.userId !== request.identity) throw new Error("forbidden");
      await this.deletePost.delete({
        id: request.id,
        userId: request.identity,
      });
      return ok({ message: "success" });
    } catch (e) {
      return forbidden(e);
    }
  }
}

export namespace DeletePostController {
  export type Request = {
    id: string;
    identity: string;
  };
}
