import { CheckCodeController } from "@/presentation/controllers/phone/check-code-controller";
import { Controller } from "@/presentation/protocols";
import { makeDbCheckCode } from "../../usecases/phone/check-code-factory";

export const makeCheckCodeController = (): Controller => {
  return new CheckCodeController(makeDbCheckCode());
};
