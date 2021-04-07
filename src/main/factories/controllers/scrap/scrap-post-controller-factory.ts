import { ScrapPostController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbScrapPost } from "@/main/factories";

export const makeScrapPostController = (): Controller => {
  return new ScrapPostController(makeDbScrapPost());
};
