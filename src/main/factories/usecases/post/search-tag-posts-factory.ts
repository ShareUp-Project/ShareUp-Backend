import { DbSearchTagPosts } from "@/data/usecases";
import { SearchTagPosts } from "@/domain/usecases";
import { PostRepository } from "@/infra/db";

export const makeDbSearchTagPosts = (): SearchTagPosts => {
  const searchTagPostsRepository = new PostRepository();
  return new DbSearchTagPosts(searchTagPostsRepository);
};
