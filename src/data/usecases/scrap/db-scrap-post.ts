import { ScrapPostRepository } from "@/data/protocols/db/scrap";
import { ScrapPost } from "@/domain/usecases";

export class DbScrapPost implements ScrapPost {
  constructor(private readonly scrapPostRepository: ScrapPostRepository) {}

  async scrap(data: ScrapPost.Params): Promise<void> {
    await this.scrapPostRepository.scrap(data);
  }
}
