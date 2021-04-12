import { CancleScrap } from "@/domain/usecases";

export interface CancleScrapRepository {
  cancle: (data: CancleScrapRepository.Params) => Promise<void>;
}

export namespace CancleScrapRepository {
  export type Params = CancleScrap.Params;
}
