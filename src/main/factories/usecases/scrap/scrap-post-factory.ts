import { DbScrapPost } from "@/data/usecases";
import { ScrapPost } from "@/domain/usecases";
import { ScrapRepository } from "@/infra/db";

export const makeDbScrapPost = (): ScrapPost => {
  const scrapPostRepository = new ScrapRepository();
  return new DbScrapPost(scrapPostRepository);
};
