import { SendCodeChangePasswordController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbSendCode, makeDbFindUser } from "@/main/factories";

export const makeSendCodeChangePasswordController = (): Controller => {
  return new SendCodeChangePasswordController(
    makeDbSendCode(),
    makeDbFindUser()
  );
};
