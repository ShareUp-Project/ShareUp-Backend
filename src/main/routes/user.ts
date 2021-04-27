import { adaptRoute } from "@/main/adapters";
import {
  makeNicknameCheckController,
  makeSignupController,
  makeChangePasswordController,
  makeGetNicknameController,
  makeChangeNicknameController,
} from "@/main/factories";
import { auth, Parameters, validationMiddleware } from "@/main/middlewares";
import {
  ChangePasswordSchema,
  CreateUserSchema,
  GetNicknameSchema,
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

  router.get(
    "/users/nickname/:id?",
    auth,
    validationMiddleware({
      schema: GetNicknameSchema,
      parameters: Parameters.PARAM,
    }),
    adaptRoute(makeGetNicknameController())
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
    "/users/nickname",
    auth,
    validationMiddleware({
      schema: NicknameCheckSchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeChangeNicknameController())
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
