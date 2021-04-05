import { adaptRoute } from "@/main/adapters";
import {
  makeCheckCodeController,
  makeSendCodeChangePasswordController,
  makeSendCodeController,
} from "@/main/factories";
import { Parameters, validationMiddleware } from "@/main/middlewares";
import { CheckCodeSchema, SendCodeSchema } from "@/validator/schemas";

import { Router } from "express";

export default (router: Router): void => {
  router.post(
    "/phones",
    validationMiddleware({
      schema: SendCodeSchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeSendCodeController())
  );

  router.post(
    "/phones/check",
    validationMiddleware({
      schema: CheckCodeSchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeCheckCodeController())
  );

  router.post(
    "/phones/password",
    validationMiddleware({
      schema: SendCodeSchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeSendCodeChangePasswordController())
  );
};
