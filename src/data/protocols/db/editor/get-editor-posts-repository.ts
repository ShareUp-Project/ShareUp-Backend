import { GetEditorPosts } from "@/domain/usecases";

export interface GetEditorPostsRepository {
  getEditorPosts: (data: GetEditorPostsRepository.Params) => any;
}

export namespace GetEditorPostsRepository {
  export type Params = GetEditorPosts.Params;
}
