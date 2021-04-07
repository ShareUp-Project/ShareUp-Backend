import { DbFindPost } from "@/data/usecases";
import { FindPost } from "@/domain/usecases";
import { PostRepository } from "@/infra/db";

export const makeDbFindPost = (): FindPost => {
  const postRepository = new PostRepository();
  return new DbFindPost(postRepository);
};
