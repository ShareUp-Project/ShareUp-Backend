import { WritePost } from "@/domain/usecases";

export interface WritePostRepository {
  write: (data: WritePostRepository.Params) => Promise<void>;
}

export namespace WritePostRepository {
  export type Params = WritePost.Params;
}
