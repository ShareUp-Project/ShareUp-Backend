import { GetScrapPosts } from "@/domain/usecases";
import { ok } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";
import _ from "lodash";

export class GetScrapPostsController implements Controller {
  constructor(private readonly getScrapPosts: GetScrapPosts) {}

  async handle(request: GetScrapPostsController.Request): Promise<HttpResponse> {
    const data = await this.getScrapPosts.getScrap({
      userId: request.identity,
      page: Number(request.page),
    });
    const response = _.map(data, (e) => {
      e.scraps = e.scraps.length;
      e.views = e.views.length;
      e.hashtags = e.hashtags.map((e) => e.tag);
      e.images = e.images.map((e) => e.id);
      return _.pick(e, [
        "id",
        "title",
        "category",
        "user.id",
        "user.nickname",
        "user.badgeCategory",
        "user.badgeLevel",
        "hashtags",
        "images",
        "scraps",
        "views",
      ]);
    });
    return ok({ data: response });
  }
}

export namespace GetScrapPostsController {
  export type Request = {
    identity: string;
    page: number;
  };
}
