import { AddView, AddWeeklyView, FindOneView, FindOneWeeklyView, GetDetailPost } from "@/domain/usecases";
import { notFound, ok } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";
import _ from "lodash";

export class GetDetailPostController implements Controller {
  constructor(
    private readonly getDetailPost: GetDetailPost,
    private readonly addView: AddView,
    private readonly findOneView: FindOneView,
    private readonly addWeeklyView: AddWeeklyView,
    private readonly findOneWeeklyView: FindOneWeeklyView
  ) {}
  async handle(request: GetDetailPostController.Request): Promise<HttpResponse> {
    try {
      const data = await this.getDetailPost.getDetail({ ...request });
      const view = await this.findOneView.findOne({
        userId: request.identity,
        postId: request.id,
      });
      const weeklyView = await this.findOneWeeklyView.findOne({
        userId: request.identity,
        postId: request.id,
      });
      if (!view)
        await this.addView.add({
          userId: request.identity,
          postId: request.id,
        });
      if (!weeklyView)
        await this.addWeeklyView.add({
          userId: request.identity,
          postId: request.id,
        });
      data.isScrap = false;
      data.isMine = false;
      if (data.scraps.findIndex((i) => i.userId === request.identity && i.postId === data.id) > -1) data.isScrap = true;
      if (data.user.id === request.identity) data.isMine = true;
      data.scraps = data.scraps.length;
      data.views = data.views.length;
      data.images = data.images.map((e) => e.id);
      const response = _.pick(data, [
        "id",
        "title",
        "category",
        "content",
        "views",
        "user.id",
        "user.nickname",
        "user.badgeCategory",
        "user.badgeLevel",
        "images",
        "scraps",
        "isScrap",
        "isMine",
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
