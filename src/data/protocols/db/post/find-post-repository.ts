import { FindPost } from "@/domain/usecases";

export interface FindPostRepository {
  findOne: (
    data: FindPostRepository.Params
  ) => Promise<FindPostRepository.Result>;
}

export namespace FindPostRepository {
  export type Params = FindPost.Params;
  export type Result = FindPost.Result;
}
