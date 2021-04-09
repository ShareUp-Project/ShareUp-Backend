"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapPostController = void 0;
const helpers_1 = require("@/presentation/helpers");
class ScrapPostController {
    constructor(scrapPost) {
        this.scrapPost = scrapPost;
    }
    async handle(request) {
        try {
            await this.scrapPost.scrap({
                postId: request.id,
                userId: request.identity,
            });
            return helpers_1.ok({ message: "success" });
        }
        catch (e) {
            return helpers_1.alreadyExistsData();
        }
    }
}
exports.ScrapPostController = ScrapPostController;
//# sourceMappingURL=scrap-post-controller.js.map