import { Category } from "@/domain/entities";
import { AddHashtag, AddImage, WritePost } from "@/domain/usecases";
import { ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class WritePostController implements Controller {
  constructor(
    private readonly writePost: WritePost,
    private readonly addHashtag: AddHashtag,
    private readonly addImage: AddImage
  ) {}

  async handle(request: WritePostController.Request): Promise<HttpResponse> {
    try {
      const postId = await this.writePost.write({
        ...request,
        userId: request.identity,
      });
      if (request.tags) {
        for (let i = 0; i < request.tags.length; i++) {
          await this.addHashtag.add({
            tag: request.tags[i],
            postId,
          });
        }
      }
      for (let image of request.images) {
        await this.addImage.add({ id: image["key"], postId });
      }
      return ok({ message: "success" });
    } catch (e) {
      return serverError(e);
    }
  }
}

export namespace WritePostController {
  export type Request = {
    id: string;
    title: string;
    content: string;
    category: Category;
    tags: Array<string>;
    images: Array<any>;
    identity: string;
  };
}
