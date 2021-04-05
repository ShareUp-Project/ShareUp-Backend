import { adaptRoute } from "@/main/adapters";
import { makeWritePostController } from "@/main/factories";
import {
  Parameters,
  validationMiddleware,
  auth,
  uploadMiddleware,
} from "@/main/middlewares";
import { WritePostSchema } from "@/validator/schemas";

import { Router } from "express";

export default (router: Router): void => {
  router.post(
    "/posts",
    auth,
    uploadMiddleware.array("images", 8),
    validationMiddleware({
      schema: WritePostSchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeWritePostController())
  );
};
