import { GetDetailPost } from "@/domain/usecases";
import { notFound, ok } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";
import _ from "lodash";

export class GetDetailPostController implements Controller {
  constructor(private readonly getDetailPost: GetDetailPost) {}

  async handle(
    request: GetDetailPostController.Request
  ): Promise<HttpResponse> {
    try {
      const data = await this.getDetailPost.getDetail({ ...request });
      data.isScrap = false;
      if (
        data.scraps.findIndex(
          (i) => i.userId === request.identity && i.postId === data.id
        ) > -1
      )
        data.isScrap = true;
      data.scraps = data.scraps.length;
      data.hashtags = data.hashtags.map((e) => e.tag);
      data.images = data.images.map((e) => e.id);
      const response = _.pick(data, [
        "id",
        "title",
        "category",
        "views",
        "user.id",
        "user.nickname",
        "hashtags",
        "images",
        "scraps",
        "isScrap",
      ]);
      return ok({ response });
    } catch (e) {
      return notFound();
    }
  }
}

export namespace GetDetailPostController {
  export type Request = {
    id: string;
    identity: string;
  };
}
