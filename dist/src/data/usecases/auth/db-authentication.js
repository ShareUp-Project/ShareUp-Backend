"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAuthentication = void 0;
class DbAuthentication {
    constructor(findUserRepository, hashCompare, encrypter) {
        this.findUserRepository = findUserRepository;
        this.hashCompare = hashCompare;
        this.encrypter = encrypter;
    }
    async auth(data) {
        const user = await this.findUserRepository.findOne(data.phone);
        if (!user)
            return null;
        const passwordCompareResult = await this.hashCompare.compare(data.password, user.password);
        if (passwordCompareResult) {
            const accessToken = await this.encrypter.encryptAccess(user.id);
            const refreshToken = await this.encrypter.encryptRefresh(user.id);
            return { accessToken, refreshToken };
        }
        return null;
    }
}
exports.DbAuthentication = DbAuthentication;
//# sourceMappingURL=db-authentication.js.map