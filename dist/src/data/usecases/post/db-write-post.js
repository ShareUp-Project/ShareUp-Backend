"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbWritePost = void 0;
class DbWritePost {
    constructor(writePostRepository, makeId) {
        this.writePostRepository = writePostRepository;
        this.makeId = makeId;
    }
    async write(data) {
        const id = await this.makeId.makeId();
        await this.writePostRepository.write({ id, ...data });
        return id;
    }
}
exports.DbWritePost = DbWritePost;
//# sourceMappingURL=db-write-post.js.map