import { GetPopularPosts } from "@/domain/usecases";
import { ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";
import _ from "lodash";

export class GetPopularPostsController implements Controller {
  constructor(private readonly getPopularPosts: GetPopularPosts) {}

  async handle(): Promise<HttpResponse> {
    try {
      const data = await this.getPopularPosts.getPopular();
      const response = _.map(data, (e) => {
        return _.pick(e, ["id", "title"]);
      });
      return ok({ data: response });
    } catch (e) {
      return serverError(e);
    }
  }
}
