"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAuthentication = void 0;
const usecases_1 = require("@/data/usecases");
const crypto_1 = require("@/infra/crypto");
const db_1 = require("@/infra/db");
const jwt_1 = require("@/infra/jwt");
const env_1 = __importDefault(require("@/main/config/env"));
exports.makeDbAuthentication = () => {
    const SALT = 12;
    const ACCESS_SECRET = env_1.default.jwt.access;
    const REFRESH_SECRET = env_1.default.jwt.refresh;
    const findUserRepository = new db_1.UserRepository();
    const bcryptAdapter = new crypto_1.BcryptAdapter(SALT);
    const jwtAdapter = new jwt_1.JwtAdapter(ACCESS_SECRET, REFRESH_SECRET);
    return new usecases_1.DbAuthentication(findUserRepository, bcryptAdapter, jwtAdapter);
};
//# sourceMappingURL=authentication-factory.js.map