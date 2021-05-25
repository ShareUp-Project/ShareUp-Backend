import { adaptRoute } from "@/main/adapters";
import {
  makeNicknameCheckController,
  makeSignupController,
  makeChangePasswordController,
  makeGetProfileController,
  makeChangeNicknameController,
  makeSetBadgeController,
  makeGetBadgesController,
} from "@/main/factories";
import { auth, Parameters, validationMiddleware } from "@/main/middlewares";
import {
  ChangePasswordSchema,
  CreateUserSchema,
  GetProfileSchema,
  NicknameCheckSchema,
  SetBadgeSchema,
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
    "/users/profile/:id?",
    auth,
    validationMiddleware({
      schema: GetProfileSchema,
      parameters: Parameters.PARAM,
    }),
    adaptRoute(makeGetProfileController())
  );

  router.get("/users/badge", auth, adaptRoute(makeGetBadgesController()));

  router.put(
    "/users/badge",
    auth,
    validationMiddleware({
      schema: SetBadgeSchema,
      parameters: Parameters.BODY,
    }),
    adaptRoute(makeSetBadgeController())
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
