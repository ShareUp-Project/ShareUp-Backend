"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbGetPosts = void 0;
class DbGetPosts {
    constructor(getPostsRepository) {
        this.getPostsRepository = getPostsRepository;
    }
    async get(data) {
        return await this.getPostsRepository.get(data);
    }
}
exports.DbGetPosts = DbGetPosts;
//# sourceMappingURL=db-get-posts.js.map