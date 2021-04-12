import { DbCancleScrap } from "@/data/usecases";
import { CancleScrap } from "@/domain/usecases";
import { ScrapRepository } from "@/infra/db";

export const makeDbCancleScrap = (): CancleScrap => {
  const cancleScrapRepository = new ScrapRepository();
  return new DbCancleScrap(cancleScrapRepository);
};
