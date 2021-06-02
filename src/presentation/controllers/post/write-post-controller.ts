import { Category } from "@/domain/entities";
import { AddHashtag, AddImage, GetAllBadges, GetAllUserPosts, UpgradeBadge, WritePost } from "@/domain/usecases";
import { ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";
import { post } from "request";

export class WritePostController implements Controller {
  constructor(
    private readonly writePost: WritePost,
    private readonly addHashtag: AddHashtag,
    private readonly addImage: AddImage,
    private readonly getAllUserPosts: GetAllUserPosts,
    private readonly getAllBadges: GetAllBadges,
    private readonly upgradeBadge: UpgradeBadge
  ) {}

  async handle(request: WritePostController.Request): Promise<HttpResponse> {
    try {
      const postId = await this.writePost.write({
        ...request,
        userId: request.identity,
      });
      for (let image of request.images) {
        await this.addImage.add({ id: image["key"], postId });
      }

      if (typeof request.tags === "string") {
        await this.addHashtag.add({ tag: request.tags, postId });
        return ok({ message: "success" });
      }
      if (request.tags) {
        for (let i = 0; i < request.tags.length; i++) {
          await this.addHashtag.add({
            tag: request.tags[i],
            postId,
          });
        }
      }
      const badgeInfo = await this.upgrade({ ...request });
      return ok({ message: "success", badgeInfo });
    } catch (e) {
      return serverError(e);
    }
  }

  private async upgrade(data: { identity: string; category: Category }) {
    try {
      const { identity, category } = data;
      if (category === Category.ETC) return {};
      const badges = await this.getAllBadges.getAllBadges({ userId: identity });
      if (badges.first === 0) {
        await this.upgradeBadge.upgrade({ userId: identity, category: "first", level: 1 });
        return { category: "first", level: 1 };
      }

      const posts = await this.getAllUserPosts.getAllUserPosts({ userId: identity, category });
      if (posts.length === 5 || posts.length === 10 || posts.length === 20) {
        switch (posts.length) {
          case 5:
            if (badges[category] >= 1) return {};
            await this.upgradeBadge.upgrade({ userId: identity, category, level: 1 });
            return { category, level: 1 };
          case 10:
            if (badges[category] >= 2) return {};
            await this.upgradeBadge.upgrade({ userId: identity, category, level: 2 });
            return { category, level: 2 };
          case 20:
            if (badges[category] >= 3) return {};
            await this.upgradeBadge.upgrade({ userId: identity, category, level: 3 });
            return { category, level: 3 };
          default:
            throw new Error();
        }
      }
      return {};
    } catch (e) {
      throw new Error("upgrade badge error");
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
