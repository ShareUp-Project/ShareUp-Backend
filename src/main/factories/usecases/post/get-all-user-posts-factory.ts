import { DbGetAllUserPosts } from "@/data/usecases";
import { GetAllUserPosts } from "@/domain/usecases";
import { PostRepository } from "@/infra/db";

export const makeDbGetAllUserPosts = (): GetAllUserPosts => {
  const getAllUserPostsRepository = new PostRepository();
  return new DbGetAllUserPosts(getAllUserPostsRepository);
};
