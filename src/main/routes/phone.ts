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
    "/phone",
    validationMiddleware({
      schema: SendCodeSchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeSendCodeController())
  );

  router.post(
    "/phone/check",
    validationMiddleware({
      schema: CheckCodeSchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeCheckCodeController())
  );

  router.post(
    "/phone/password",
    validationMiddleware({
      schema: SendCodeSchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeSendCodeChangePasswordController())
  );
};
