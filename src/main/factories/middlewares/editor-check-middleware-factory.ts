import { JwtAdapter } from "@/infra/jwt";
import { EditorAuthMiddleware } from "@/presentation/middlewares";
import { Middleware } from "@/presentation/protocols";
import env from "@/main/config/env";

export const makeEditorAuthMiddleware = (): Middleware => {
  const ACCESS_SECRET = env.jwt.access;
  const REFRESH_SECRET = env.jwt.refresh;
  const jwtAdapter = new JwtAdapter(ACCESS_SECRET, REFRESH_SECRET);
  return new EditorAuthMiddleware(jwtAdapter);
};
