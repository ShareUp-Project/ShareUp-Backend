import { GetUserPosts } from "@/domain/usecases";

export interface GetUserPostsRepository {
  getUserPosts: (data: GetUserPostsRepository.Params) => any;
}

export namespace GetUserPostsRepository {
  export type Params = GetUserPosts.Params;
}
