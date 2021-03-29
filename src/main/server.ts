import "module-alias/register";
import "reflect-metadata";
import env from "@/main/config/env";
import app from "@/main/config/app";

const PORT: number = env.port;

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
