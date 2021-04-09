"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbScrapPost = void 0;
class DbScrapPost {
    constructor(scrapPostRepository) {
        this.scrapPostRepository = scrapPostRepository;
    }
    async scrap(data) {
        await this.scrapPostRepository.scrap(data);
    }
}
exports.DbScrapPost = DbScrapPost;
//# sourceMappingURL=db-scrap-post.js.map