import { SearchTagPosts } from "@/domain/usecases";

export interface SearchTagPostsRepository {
  searchPosts: (data: SearchTagPostsRepository.Params) => any;
}

export namespace SearchTagPostsRepository {
  export type Params = SearchTagPosts.Params;
}
