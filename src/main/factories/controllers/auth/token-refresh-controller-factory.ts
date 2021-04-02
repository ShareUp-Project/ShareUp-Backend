import { TokenRefreshController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbTokenRefresh } from "@/main/factories";

export const makeTokenRefreshController = (): Controller => {
  return new TokenRefreshController(makeDbTokenRefresh());
};
