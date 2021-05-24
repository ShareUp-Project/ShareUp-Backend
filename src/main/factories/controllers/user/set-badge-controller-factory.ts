import { SetBadgeController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbSetBadge } from "@/main/factories";

export const makeSetBadgeController = (): Controller => {
  return new SetBadgeController(makeDbSetBadge());
};
