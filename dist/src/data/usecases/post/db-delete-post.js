"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeletePost = void 0;
class DbDeletePost {
    constructor(deletePostRepository) {
        this.deletePostRepository = deletePostRepository;
    }
    async delete(data) {
        await this.deletePostRepository.delete(data);
    }
}
exports.DbDeletePost = DbDeletePost;
//# sourceMappingURL=db-delete-post.js.map