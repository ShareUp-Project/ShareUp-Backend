import { bodyParser, corsMiddleware, url } from "@/main/middlewares";

import { Express } from "express";

export default (app: Express): void => {
  app.use(bodyParser);
  app.use(url);
  app.use(corsMiddleware);
};
