"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisRepository = void 0;
const redis_1 = __importDefault(require("redis"));
const env_1 = __importDefault(require("@/main/config/env"));
const REDIS_HOST = env_1.default.redis.host;
const client = redis_1.default.createClient({ host: REDIS_HOST });
class RedisRepository {
    setAuthCode(data) {
        client.set(data.phone, data.code);
        client.expire(data.phone, 180);
    }
    getAuthCode(phone) {
        return new Promise((resolve, reject) => {
            client.get(phone, (e, data) => {
                if (e) {
                    reject(e);
                }
                resolve(data.toString());
            });
        });
    }
}
exports.RedisRepository = RedisRepository;
//# sourceMappingURL=redis-repository.js.map