import { DbGetScrapPosts } from "@/data/usecases";
import { GetScrapPosts } from "@/domain/usecases";
import { PostRepository } from "@/infra/db";

export const makeDbGetScrapPosts = (): GetScrapPosts => {
  const getScrapPostsRepository = new PostRepository();
  return new DbGetScrapPosts(getScrapPostsRepository);
};
