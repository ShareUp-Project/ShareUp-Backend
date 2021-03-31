import { SendCodeController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbSendCode } from "@/main/factories";

export const makeSendCodeController = (): Controller => {
  return new SendCodeController(makeDbSendCode());
};
