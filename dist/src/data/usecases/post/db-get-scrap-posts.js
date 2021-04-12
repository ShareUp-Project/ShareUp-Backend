"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbGetScrapPosts = void 0;
class DbGetScrapPosts {
    constructor(getScrapPostsRepository) {
        this.getScrapPostsRepository = getScrapPostsRepository;
    }
    async getScrap(data) {
        return await this.getScrapPostsRepository.getScrap(data);
    }
}
exports.DbGetScrapPosts = DbGetScrapPosts;
//# sourceMappingURL=db-get-scrap-posts.js.map