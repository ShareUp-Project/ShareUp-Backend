"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbCreateUser = void 0;
const usecases_1 = require("@/data/usecases");
const crypto_1 = require("@/infra/crypto");
const db_1 = require("@/infra/db");
const uuid_1 = require("@/infra/uuid");
exports.makeDbCreateUser = () => {
    const SALT = 12;
    const createUserRepository = new db_1.UserRepository();
    const hasher = new crypto_1.BcryptAdapter(SALT);
    const makeId = new uuid_1.UuidAdapter();
    return new usecases_1.DbCreateUser(createUserRepository, hasher, makeId);
};
//# sourceMappingURL=create-user-factory.js.map