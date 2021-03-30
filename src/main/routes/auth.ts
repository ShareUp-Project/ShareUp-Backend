import { adaptRoute } from "@/main/adapters";
import { makeLoginController } from "@/main/factories";
import { Parameters, validationMiddleware } from "@/main/middlewares";
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
};
