import { adaptRoute } from "@/main/adapters";
import {
  makeGetPostsController,
  makeWritePostController,
} from "@/main/factories";
import {
  Parameters,
  validationMiddleware,
  auth,
  uploadMiddleware,
} from "@/main/middlewares";
import { GetPostsSchema, WritePostSchema } from "@/validator/schemas";

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
  router.get(
    "/posts",
    auth,
    validationMiddleware({
      schema: GetPostsSchema,
      parameters: Parameters.QUERY,
    }),
    adaptRoute(makeGetPostsController())
  );
};
