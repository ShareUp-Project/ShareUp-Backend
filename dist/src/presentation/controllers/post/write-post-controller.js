"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WritePostController = void 0;
const helpers_1 = require("@/presentation/helpers");
class WritePostController {
    constructor(writePost, addHashtag, addImage) {
        this.writePost = writePost;
        this.addHashtag = addHashtag;
        this.addImage = addImage;
    }
    async handle(request) {
        try {
            const postId = await this.writePost.write({
                ...request,
                userId: request.identity,
            });
            for (let tag of request.tags) {
                await this.addHashtag.add({
                    id: request.id,
                    tag,
                    postId,
                });
            }
            for (let image of request.images) {
                await this.addImage.add({ id: image["key"], postId });
            }
            return helpers_1.ok({ message: "success" });
        }
        catch (e) {
            return helpers_1.serverError(e);
        }
    }
}
exports.WritePostController = WritePostController;
//# sourceMappingURL=write-post-controller.js.map