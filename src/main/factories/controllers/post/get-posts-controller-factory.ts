import { GetPostsController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbGetPosts } from "@/main/factories";

export const makeGetPostsController = (): Controller => {
  return new GetPostsController(makeDbGetPosts());
};
