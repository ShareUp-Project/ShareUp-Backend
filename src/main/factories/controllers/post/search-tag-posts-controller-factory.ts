import { SearchTagPostsController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbSearchTagPosts } from "@/main/factories";

export const makeSearchTagPostsController = (): Controller => {
  return new SearchTagPostsController(makeDbSearchTagPosts());
};
