import { bodyParser, corsMiddleware } from "@/main/middlewares";

import { Express } from "express";

export default (app: Express): void => {
  app.use(bodyParser);
  app.use(corsMiddleware);
};
