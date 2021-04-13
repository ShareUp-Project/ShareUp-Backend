"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbGetDetailPost = void 0;
class DbGetDetailPost {
    constructor(getDetailPostRepository) {
        this.getDetailPostRepository = getDetailPostRepository;
    }
    async getDetail(data) {
        return await this.getDetailPostRepository.getDetail(data);
    }
}
exports.DbGetDetailPost = DbGetDetailPost;
//# sourceMappingURL=db-get-detail-post.js.map