"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbFindUser = void 0;
const usecases_1 = require("@/data/usecases");
const db_1 = require("@/infra/db");
exports.makeDbFindUser = () => {
    const findUserRepository = new db_1.UserRepository();
    return new usecases_1.DbFindUser(findUserRepository);
};
//# sourceMappingURL=find-user-factory.js.map