import { DbGetPopularPosts } from "@/data/usecases";
import { GetPopularPosts } from "@/domain/usecases";
import { PostRepository } from "@/infra/db";

export const makeDbGetPopularPosts = (): GetPopularPosts => {
  const getPopularPostsRepository = new PostRepository();
  return new DbGetPopularPosts(getPopularPostsRepository);
};
