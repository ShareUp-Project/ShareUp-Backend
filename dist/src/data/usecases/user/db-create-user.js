"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbCreateUser = void 0;
class DbCreateUser {
    constructor(createUserRepository, hasher, makeId) {
        this.createUserRepository = createUserRepository;
        this.hasher = hasher;
        this.makeId = makeId;
    }
    async create(data) {
        const uuid = await this.makeId.makeId();
        const hashedPassword = await this.hasher.hash(data.password);
        await this.createUserRepository.create({
            ...data,
            id: uuid,
            password: hashedPassword,
        });
    }
}
exports.DbCreateUser = DbCreateUser;
//# sourceMappingURL=db-create-user.js.map