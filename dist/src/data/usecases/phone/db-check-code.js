"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbCheckCode = void 0;
class DbCheckCode {
    constructor(getAuthRepository) {
        this.getAuthRepository = getAuthRepository;
    }
    async check(data) {
        try {
            const code = await this.getAuthRepository.getAuthCode(data.phone);
            return code === data.code;
        }
        catch (e) {
            return false;
        }
    }
}
exports.DbCheckCode = DbCheckCode;
//# sourceMappingURL=db-check-code.js.map