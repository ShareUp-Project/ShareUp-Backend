import { ScrapPost } from "@/domain/usecases/scrap";

export interface ScrapPostRepository {
  scrap: (data: ScrapPostRepository.Params) => Promise<void>;
}

export namespace ScrapPostRepository {
  export type Params = ScrapPost.Params;
}
