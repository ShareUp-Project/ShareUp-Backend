import { CheckCodeController } from "@/presentation/controllers/phone/check-code-controller";
import { Controller } from "@/presentation/protocols";
import { makeDbCheckCode } from "@/main/factories";

export const makeCheckCodeController = (): Controller => {
  return new CheckCodeController(makeDbCheckCode());
};
