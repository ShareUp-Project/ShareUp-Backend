import { adaptRoute } from "@/main/adapters";
import { makeSignupController } from "@/main/factories";

import { Router } from "express";

export default (router: Router): void => {
  router.post("/user", adaptRoute(makeSignupController()));
};
