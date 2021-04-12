import { CancleScrapRepository } from "@/data/protocols/db/scrap";
import { CancleScrap } from "@/domain/usecases";

export class DbCancleScrap implements CancleScrap {
  constructor(private readonly cancleScrapRepository: CancleScrapRepository) {}

  async cancle(data: CancleScrap.Params): Promise<void> {
    await this.cancleScrapRepository.cancle(data);
  }
}
