import { GetScrapPosts } from "@/domain/usecases";

export interface GetScrapPostsRepository {
  getScrap: (data: GetScrapPostsRepository.Params) => Promise<any>;
}

export namespace GetScrapPostsRepository {
  export type Params = GetScrapPosts.Params;
}
