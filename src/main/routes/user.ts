import { adaptRoute } from "@/main/adapters";
import { makeSignupController } from "@/main/factories";
import { Parameters, validationMiddleware } from "@/main/middlewares";
import { CreateUserSchema } from "@/validator/schemas";

import { Router } from "express";

export default (router: Router): void => {
  router.post(
    "/user",
    validationMiddleware({
      schema: CreateUserSchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeSignupController())
  );
};
