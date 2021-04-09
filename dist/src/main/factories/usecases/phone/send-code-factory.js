"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbSendCode = void 0;
const usecases_1 = require("@/data/usecases");
const code_1 = require("@/infra/code");
const redis_repository_1 = require("@/infra/db/redis/redis-repository");
const phone_1 = require("@/infra/phone");
const env_1 = __importDefault(require("@/main/config/env"));
exports.makeDbSendCode = () => {
    const SERVICE_ID = env_1.default.sens.id;
    const ACCESS = env_1.default.sens.access;
    const SECRET = env_1.default.sens.secret;
    const PHONE = env_1.default.sens.phone;
    const redisRepository = new redis_repository_1.RedisRepository();
    const codeAdapter = new code_1.CodeAdapter();
    const sendMessageAdapter = new phone_1.SendMessageAdapter(SERVICE_ID, ACCESS, SECRET, PHONE);
    return new usecases_1.DbSendCode(redisRepository, codeAdapter, sendMessageAdapter);
};
//# sourceMappingURL=send-code-factory.js.map