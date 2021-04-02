import { JwtAdapter } from "@/infra/jwt";
import { Middleware } from "@/presentation/protocols";
import env from "@/main/config/env";
import { RefreshMiddleware } from "@/presentation/middlewares";

export const makeRefreshMiddleware = (): Middleware => {
  const ACCESS_SECRET = env.jwt.access;
  const REFRESH_SECRET = env.jwt.refresh;
  const jwtAdapter = new JwtAdapter(ACCESS_SECRET, REFRESH_SECRET);
  return new RefreshMiddleware(jwtAdapter);
};
