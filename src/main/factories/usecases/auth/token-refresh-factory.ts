import { DbTokenRefresh } from "@/data/usecases";
import { TokenRefresh } from "@/domain/usecases";
import { JwtAdapter } from "@/infra/jwt";
import env from "@/main/config/env";

export const makeDbTokenRefresh = (): TokenRefresh => {
  const ACCESS_SECRET = env.jwt.access;
  const REFRESH_SECRET = env.jwt.refresh;
  const jwtAdapter = new JwtAdapter(ACCESS_SECRET, REFRESH_SECRET);
  return new DbTokenRefresh(jwtAdapter);
};
