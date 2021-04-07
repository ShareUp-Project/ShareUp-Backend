import { DeletePost } from "@/domain/usecases";

export interface DeletePostRepository {
  delete: (data: DeletePostRepository.Params) => Promise<void>;
}

export namespace DeletePostRepository {
  export type Params = DeletePost.Params;
}
