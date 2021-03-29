import setupMiddleware from "./middlewares";
import setupRouter from "./routes";

import express from "express";

const app = express();

setupMiddleware(app);
setupRouter(app);

export default app;
