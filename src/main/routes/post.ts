import { adaptRoute } from "@/main/adapters";
import {
  makeDeletePostController,
  makeGetPostsController,
  makeWritePostController,
  makeScrapPostController,
  makeGetScrapPostsController,
  makeCancleScrapController,
  makeGetDetailPostController,
  makeSearchTagPostsController,
  makeGetUserPostsController,
  makeWriteEditorPostController,
} from "@/main/factories";
import {
  Parameters,
  validationMiddleware,
  auth,
  uploadMiddleware,
  editorCheck,
} from "@/main/middlewares";
import {
  DeletePostsSchema,
  GetDetailPostSchema,
  GetEditorPostsSchema,
  GetPostsSchema,
  GetUserPostsSchema,
  ScrapPostsSchema,
  SearchTagPosts,
} from "@/validator/schemas";
import { Router } from "express";

export default (router: Router): void => {
  router.post(
    "/posts",
    auth,
    uploadMiddleware.array("images", 8),
    adaptRoute(makeWritePostController())
  );

  router.post(
    "/posts/editor",
    editorCheck,
    uploadMiddleware.single("image"),
    adaptRoute(makeWriteEditorPostController())
  );

  router.get(
    "/posts/editor",
    validationMiddleware({
      schema: GetEditorPostsSchema,
      parameters: Parameters.QUERY,
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

  router.get(
    "/posts/users/:id?",
    auth,
    validationMiddleware({
      schema: GetUserPostsSchema,
      parameters: Parameters.PARAM,
    }),
    validationMiddleware({
      schema: GetPostsSchema,
      parameters: Parameters.QUERY,
    }),
    adaptRoute(makeGetUserPostsController())
  );

  router.get(
    "/posts/search",
    auth,
    validationMiddleware({
      schema: SearchTagPosts,
      parameters: Parameters.QUERY,
    }),
    adaptRoute(makeSearchTagPostsController())
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

  router.get(
    "/posts/:id",
    auth,
    validationMiddleware({
      schema: GetDetailPostSchema,
      parameters: Parameters.PARAM,
    }),
    adaptRoute(makeGetDetailPostController())
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
