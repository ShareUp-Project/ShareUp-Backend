import { GetBadgesController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbGetAllBadges } from "@/main/factories";

export const makeGetBadgesController = (): Controller => {
  return new GetBadgesController(makeDbGetAllBadges());
};
