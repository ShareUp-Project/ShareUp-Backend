import { adaptRoute } from "@/main/adapters";
import {
  makeEditorLoginController,
  makeLoginController,
  makeTokenRefreshController,
} from "@/main/factories";
import { Parameters, refresh, validationMiddleware } from "@/main/middlewares";
import { AuthenticationSchema, EditorAuthSchema } from "@/validator/schemas";

import { Router } from "express";

export default (router: Router): void => {
  router.post(
    "/auth",
    validationMiddleware({
      schema: AuthenticationSchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeLoginController())
  );

  router.post(
    "/auth/editor",
    validationMiddleware({
      schema: EditorAuthSchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeEditorLoginController())
  );

  router.get(
    "/auth/refresh",
    refresh,
    adaptRoute(makeTokenRefreshController())
  );
};
