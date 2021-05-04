import "module-alias/register";
import "reflect-metadata";
import env from "@/main/config/env";
import app from "@/main/config/app";
import { connection } from "@/infra/db";

const PORT: number = env.port;

async function startServer() {
  await connection();
  app.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
  });
}

startServer();
