import { GetUserPostsController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbGetUserPosts } from "@/main/factories";

export const makeGetUserPostsController = (): Controller => {
  return new GetUserPostsController(makeDbGetUserPosts());
};
