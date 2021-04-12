import { GetScrapPostsController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbGetScrapPosts } from "@/main/factories";

export const makeGetScrapPostsController = (): Controller => {
  return new GetScrapPostsController(makeDbGetScrapPosts());
};
