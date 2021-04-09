"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbFindPost = void 0;
class DbFindPost {
    constructor(findPostRepository) {
        this.findPostRepository = findPostRepository;
    }
    async findOne(data) {
        return await this.findPostRepository.findOne(data);
    }
}
exports.DbFindPost = DbFindPost;
//# sourceMappingURL=db-find-post.js.map