import { adaptRoute } from "@/main/adapters";
import {
  makeLoginController,
  makeTokenRefreshController,
} from "@/main/factories";
import { Parameters, refresh, validationMiddleware } from "@/main/middlewares";
import { AuthenticationSchema } from "@/validator/schemas";

import { Router } from "express";

export default (router: Router): void => {
  router.post(
    "/auth",
    validationMiddleware({
      schema: AuthenticationSchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeLoginController())
  );

  router.get(
    "/auth/refresh",
    refresh,
    adaptRoute(makeTokenRefreshController())
  );
};
