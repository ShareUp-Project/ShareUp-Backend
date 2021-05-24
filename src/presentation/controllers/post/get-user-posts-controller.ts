import { GetUserPosts } from "@/domain/usecases";
import { ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";
import _ from "lodash";

export class GetUserPostsController implements Controller {
  constructor(private readonly getUserPosts: GetUserPosts) {}

  async handle(request: GetUserPostsController.Request): Promise<HttpResponse> {
    try {
      if (!request.id) request.id = request.identity;
      const data = await this.getUserPosts.getUserPosts({
        userId: request.id,
        page: Number(request.page),
      });
      const response = _.map(data, (e) => {
        e.isScrap = false;
        if (e.scraps.findIndex((i) => i.userId === request.identity && i.postId === e.id) > -1) e.isScrap = true;
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
          "user.badgeCategory",
          "user.badgeLevel",
          "hashtags",
          "images",
          "scraps",
          "isScrap",
        ]);
      });
      return ok({ data: response });
    } catch (e) {
      return serverError(e);
    }
  }
}

export namespace GetUserPostsController {
  export type Request = {
    identity: string;
    id: string;
    page: string;
  };
}
