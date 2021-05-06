import { GetPopularPostsController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbGetPopularPosts } from "@/main/factories";

export const makeGetPopularPostsController = (): Controller => {
  return new GetPopularPostsController(makeDbGetPopularPosts());
};
