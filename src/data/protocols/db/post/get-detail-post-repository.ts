import { GetDetailPost } from "@/domain/usecases";

export interface GetDetailPostRepository {
  getDetail: (data: GetDetailPostRepository.Params) => Promise<any>;
}

export namespace GetDetailPostRepository {
  export type Params = GetDetailPost.Params;
}
