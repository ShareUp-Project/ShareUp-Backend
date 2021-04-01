import { ChangePasswordController } from "@/presentation/controllers";
import { makeDbFindUser, makeDbChangePassword } from "@/main/factories";
import { Controller } from "@/presentation/protocols";

export const makeChangePasswordController = (): Controller => {
  return new ChangePasswordController(makeDbFindUser(), makeDbChangePassword());
};
