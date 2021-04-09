"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbChangePassword = void 0;
class DbChangePassword {
    constructor(changePasswordRepository, hasher) {
        this.changePasswordRepository = changePasswordRepository;
        this.hasher = hasher;
    }
    async change(data) {
        const hashedPassword = await this.hasher.hash(data.password);
        await this.changePasswordRepository.change({
            ...data,
            password: hashedPassword,
        });
    }
}
exports.DbChangePassword = DbChangePassword;
//# sourceMappingURL=db-change-password.js.map