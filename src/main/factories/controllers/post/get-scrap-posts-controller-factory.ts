import { GetScrapPostsController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbGetScrapPosts } from "../../usecases";

export const makeGetScrapPostsController = (): Controller => {
  return new GetScrapPostsController(makeDbGetScrapPosts());
};
