import { SignUpController } from "@/presentation/controllers";
import { makeDbCreateUser, makeDbFindUser } from "@/main/factories";
import { Controller } from "@/presentation/protocols";

export const makeSignupController = (): Controller => {
  return new SignUpController(makeDbCreateUser(), makeDbFindUser());
};
