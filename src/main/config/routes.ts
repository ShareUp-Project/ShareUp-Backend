import { Express, Router } from "express";

import userRouter from "@/main/routes/user";
import authRouter from "@/main/routes/auth";

export default (app: Express): void => {
  const router = Router();
  app.use("/api", router);

  userRouter(router);
  authRouter(router);
};
