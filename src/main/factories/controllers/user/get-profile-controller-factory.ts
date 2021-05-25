import { GetProfileController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbGetProfile } from "@/main/factories";

export const makeGetProfileController = (): Controller => {
  return new GetProfileController(makeDbGetProfile());
};
