import { GetAllUserPosts } from "@/domain/usecases";

export interface GetAllUserPostsRepository {
  getAllUserPosts: (data: GetAllUserPostsRepository.Params) => Promise<any>;
}

export namespace GetAllUserPostsRepository {
  export type Params = GetAllUserPosts.Params;
}
