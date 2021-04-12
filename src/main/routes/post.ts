import { adaptRoute } from "@/main/adapters";
import {
  makeDeletePostController,
  makeGetPostsController,
  makeWritePostController,
  makeScrapPostController,
  makeGetScrapPostsController,
  makeCancleScrapController,
} from "@/main/factories";
import {
  Parameters,
  validationMiddleware,
  auth,
  uploadMiddleware,
} from "@/main/middlewares";
import {
  DeletePostsSchema,
  GetPostsSchema,
  ScrapPostsSchema,
  WritePostSchema,
} from "@/validator/schemas";

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
  router.post(
    "/posts/scraps/:id",
    auth,
    validationMiddleware({
      schema: ScrapPostsSchema,
      parameters: Parameters.PARAM,
    }),
    adaptRoute(makeScrapPostController())
  );
  router.get(
    "/posts/scraps",
    auth,
    validationMiddleware({
      schema: GetPostsSchema,
      parameters: Parameters.QUERY,
    }),
    adaptRoute(makeGetScrapPostsController())
  );
  router.delete(
    "/posts/:id",
    auth,
    validationMiddleware({
      schema: DeletePostsSchema,
      parameters: Parameters.PARAM,
    }),
    adaptRoute(makeDeletePostController())
  );
  router.delete(
    "/posts/scraps/:id",
    auth,
    validationMiddleware({
      schema: DeletePostsSchema,
      parameters: Parameters.PARAM,
    }),
    adaptRoute(makeCancleScrapController())
  );
};
