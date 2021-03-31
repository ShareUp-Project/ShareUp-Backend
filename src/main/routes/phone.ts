import { adaptRoute } from "@/main/adapters";
import {
  makeCheckCodeController,
  makeSendCodeController,
} from "@/main/factories";
import { Parameters, validationMiddleware } from "@/main/middlewares";
import {
  CheckCodeBodySchema,
  CheckCodeQuerySchema,
  SendCodeSchema,
} from "@/validator/schemas";

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
      schema: CheckCodeQuerySchema,
      parameters: Parameters.QUERY,
    }),
    validationMiddleware({
      schema: CheckCodeBodySchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeCheckCodeController())
  );
};
