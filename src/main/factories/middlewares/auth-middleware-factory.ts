import { JwtAdapter } from "@/infra/jwt";
import { AuthMiddleware } from "@/presentation/middlewares/auth";
import { Middleware } from "@/presentation/protocols";
import env from "@/main/config/env";

export const makeAuthMiddleware = (): Middleware => {
  const ACCESS_SECRET = env.jwt.access;
  const REFRESH_SECRET = env.jwt.refresh;
  const jwtAdapter = new JwtAdapter(ACCESS_SECRET, REFRESH_SECRET);
  return new AuthMiddleware(jwtAdapter);
};
