"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbTokenRefresh = void 0;
const usecases_1 = require("@/data/usecases");
const jwt_1 = require("@/infra/jwt");
const env_1 = __importDefault(require("@/main/config/env"));
exports.makeDbTokenRefresh = () => {
    const ACCESS_SECRET = env_1.default.jwt.access;
    const REFRESH_SECRET = env_1.default.jwt.refresh;
    const jwtAdapter = new jwt_1.JwtAdapter(ACCESS_SECRET, REFRESH_SECRET);
    return new usecases_1.DbTokenRefresh(jwtAdapter);
};
//# sourceMappingURL=token-refresh-factory.js.map