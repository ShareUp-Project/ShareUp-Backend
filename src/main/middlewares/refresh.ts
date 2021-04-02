import { adaptMiddleware } from "@/main/adapters";
import { makeRefreshMiddleware } from "@/main/factories";

export const refresh = adaptMiddleware(makeRefreshMiddleware());
