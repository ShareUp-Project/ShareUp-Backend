import { CancleScrapController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbCancleScrap } from "@/main/factories";

export const makeCancleScrapController = (): Controller => {
  return new CancleScrapController(makeDbCancleScrap());
};
