import { GetPosts } from "@/domain/usecases";
import { ok } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";
import _ from "lodash";

export class GetPostsController implements Controller {
  constructor(private readonly getPosts: GetPosts) {}
  async handle(request: GetPostsController.Request): Promise<HttpResponse> {
    const data = await this.getPosts.get(request);
    const response = _.map(data, (e) => {
      e.isScrap = false;
      if (
        e.scraps.findIndex(
          (i) => i.userId === request.identity && i.postId === e.id
        ) > -1
      )
        e.isScrap = true;
      e.scraps = e.scraps.length;
      e.views = e.views.length;
      e.hashtags = e.hashtags.map((e) => e.tag);
      e.images = e.images.map((e) => e.id);
      return _.pick(e, [
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
    });
    return ok({ data: response });
  }
}

export namespace GetPostsController {
  export type Request = {
    page: number;
    category: string;
    identity: string;
  };
}
