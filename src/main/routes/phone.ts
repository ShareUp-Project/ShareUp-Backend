import { adaptRoute } from "@/main/adapters";
import { makeSendCodeController } from "@/main/factories";
import { Parameters, validationMiddleware } from "@/main/middlewares";

import { Router } from "express";

export default (router: Router): void => {
  router.post("/phone", adaptRoute(makeSendCodeController()));
};
