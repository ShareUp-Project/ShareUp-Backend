import { DbGetDetailPost } from "@/data/usecases";
import { GetDetailPost } from "@/domain/usecases";
import { PostRepository } from "@/infra/db";

export const makeDbGetDetailPost = (): GetDetailPost => {
  const getDetailPostRepository = new PostRepository();
  return new DbGetDetailPost(getDetailPostRepository);
};
