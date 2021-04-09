"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbChangePassword = void 0;
const usecases_1 = require("@/data/usecases");
const crypto_1 = require("@/infra/crypto");
const db_1 = require("@/infra/db");
exports.makeDbChangePassword = () => {
    const SALT = 12;
    const changePasswordRepository = new db_1.UserRepository();
    const bcryptAdapter = new crypto_1.BcryptAdapter(SALT);
    return new usecases_1.DbChangePassword(changePasswordRepository, bcryptAdapter);
};
//# sourceMappingURL=change-password-factory.js.map