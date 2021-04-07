import { DbDeletePost } from "@/data/usecases";
import { DeletePost } from "@/domain/usecases";
import { PostRepository } from "@/infra/db";

export const makeDbDeletePost = (): DeletePost => {
  const postRepository = new PostRepository();
  return new DbDeletePost(postRepository);
};
