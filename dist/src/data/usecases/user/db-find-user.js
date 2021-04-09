"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbFindUser = void 0;
class DbFindUser {
    constructor(findUserRepository) {
        this.findUserRepository = findUserRepository;
    }
    async findOne(phone) {
        return await this.findUserRepository.findOne(phone);
    }
    async findOneByNickname(nickname) {
        return await this.findUserRepository.findOneByNickname(nickname);
    }
}
exports.DbFindUser = DbFindUser;
//# sourceMappingURL=db-find-user.js.map