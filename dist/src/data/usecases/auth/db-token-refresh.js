"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbTokenRefresh = void 0;
class DbTokenRefresh {
    constructor(encrypter) {
        this.encrypter = encrypter;
    }
    async refresh(data) {
        const accessToken = await this.encrypter.encryptAccess(data.identity);
        const refreshToken = await this.encrypter.encryptRefresh(data.identity);
        return { accessToken, refreshToken };
    }
}
exports.DbTokenRefresh = DbTokenRefresh;
//# sourceMappingURL=db-token-refresh.js.map