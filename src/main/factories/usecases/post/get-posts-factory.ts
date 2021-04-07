import { DbGetPosts } from "@/data/usecases";
import { GetPosts } from "@/domain/usecases";
import { PostRepository } from "@/infra/db";

export const makeDbGetPosts = (): GetPosts => {
  const postRepository = new PostRepository();
  return new DbGetPosts(postRepository);
};
