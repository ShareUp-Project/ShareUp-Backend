import { adaptRoute } from "@/main/adapters";
import { makeSendCodeController } from "@/main/factories";
import { Parameters, validationMiddleware } from "@/main/middlewares";
import { SendCodeSchema } from "@/validator/schemas";

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
};
