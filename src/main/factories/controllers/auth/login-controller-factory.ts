import { LoginController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbAuthentication } from "@/main/factories";

export const makeLoginController = (): Controller => {
  return new LoginController(makeDbAuthentication());
};
