import { SearchTagPosts } from "@/domain/usecases";
import { ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";
import _ from "lodash";

export class SearchTagPostsController implements Controller {
  constructor(private readonly searchTagPosts: SearchTagPosts) {}

  async handle(request: SearchTagPostsController.Request): Promise<HttpResponse> {
    try {
      const data = await this.searchTagPosts.searchPosts({
        word: request.word,
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

export namespace SearchTagPostsController {
  export type Request = {
    identity: string;
    word: string;
    page: string;
  };
}
