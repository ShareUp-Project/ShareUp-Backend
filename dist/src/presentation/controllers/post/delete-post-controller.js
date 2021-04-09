"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePostController = void 0;
const helpers_1 = require("@/presentation/helpers");
class DeletePostController {
    constructor(deletePost, findPost) {
        this.deletePost = deletePost;
        this.findPost = findPost;
    }
    async handle(request) {
        try {
            const post = await this.findPost.findOne({ id: request.id });
            if (post.userId !== request.identity)
                throw new Error("forbidden");
            await this.deletePost.delete({
                id: request.id,
                userId: request.identity,
            });
            return helpers_1.ok({ message: "success" });
        }
        catch (e) {
            return helpers_1.forbidden(e);
        }
    }
}
exports.DeletePostController = DeletePostController;
//# sourceMappingURL=delete-post-controller.js.map