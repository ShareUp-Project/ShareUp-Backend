"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRefreshMiddleware = void 0;
const jwt_1 = require("@/infra/jwt");
const env_1 = __importDefault(require("@/main/config/env"));
const middlewares_1 = require("@/presentation/middlewares");
exports.makeRefreshMiddleware = () => {
    const ACCESS_SECRET = env_1.default.jwt.access;
    const REFRESH_SECRET = env_1.default.jwt.refresh;
    const jwtAdapter = new jwt_1.JwtAdapter(ACCESS_SECRET, REFRESH_SECRET);
    return new middlewares_1.RefreshMiddleware(jwtAdapter);
};
//# sourceMappingURL=refresh-middleware-factory.js.map