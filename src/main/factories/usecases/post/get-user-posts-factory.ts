import { DbGetUserPosts } from "@/data/usecases";
import { GetUserPosts } from "@/domain/usecases";
import { PostRepository } from "@/infra/db";

export const makeDbGetUserPosts = (): GetUserPosts => {
  const getUserPostsRepository = new PostRepository();
  return new DbGetUserPosts(getUserPostsRepository);
};
