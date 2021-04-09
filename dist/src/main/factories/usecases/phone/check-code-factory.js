"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbCheckCode = void 0;
const usecases_1 = require("@/data/usecases");
const redis_repository_1 = require("@/infra/db/redis/redis-repository");
exports.makeDbCheckCode = () => {
    const redidRepsitory = new redis_repository_1.RedisRepository();
    return new usecases_1.DbCheckCode(redidRepsitory);
};
//# sourceMappingURL=check-code-factory.js.map