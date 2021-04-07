import { GetPosts } from "@/domain/usecases";

export interface GetPostsRepository {
  get: (data: GetPostsRepository.Params) => Promise<any>;
}

export namespace GetPostsRepository {
  export type Params = GetPosts.Params;
}
