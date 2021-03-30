import { Express, Router } from "express";

import userRouter from "@/main/routes/user";

export default (app: Express): void => {
  const router = Router();
  app.use("/api", router);

  userRouter(router);
};
