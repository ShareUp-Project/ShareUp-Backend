import { adaptRoute } from "@/main/adapters";
import {
  makeNicknameCheckController,
  makeSignupController,
  makeChangePasswordController,
} from "@/main/factories";
import { Parameters, validationMiddleware } from "@/main/middlewares";
import {
  ChangePasswordSchema,
  CreateUserSchema,
  NicknameCheckSchema,
} from "@/validator/schemas";

import { Router } from "express";

export default (router: Router): void => {
  router.post(
    "/users",
    validationMiddleware({
      schema: CreateUserSchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeSignupController())
  );
  router.post(
    "/users/nickname",
    validationMiddleware({
      schema: NicknameCheckSchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeNicknameCheckController())
  );
  router.put(
    "/users/password",
    validationMiddleware({
      schema: ChangePasswordSchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeChangePasswordController())
  );
};
