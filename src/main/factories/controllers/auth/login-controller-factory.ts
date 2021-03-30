import { LoginController } from "@/presentation/controllers/auth/login-controller";
import { Controller } from "@/presentation/protocols";
import { makeDbAuthentication } from "../../usecases/auth/authentication-factory";

export const makeLoginController = (): Controller => {
  return new LoginController(makeDbAuthentication());
};
