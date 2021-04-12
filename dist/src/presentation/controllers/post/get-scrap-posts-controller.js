"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetScrapPostsController = void 0;
const helpers_1 = require("@/presentation/helpers");
const lodash_1 = __importDefault(require("lodash"));
class GetScrapPostsController {
    constructor(getScrapPosts) {
        this.getScrapPosts = getScrapPosts;
    }
    async handle(request) {
        const data = await this.getScrapPosts.getScrap({
            userId: request.identity,
            page: Number(request.page),
        });
        console.log(data);
        const response = lodash_1.default.map(data, (e) => {
            e.hashtags = e.hashtags.map((e) => e.tag);
            e.images = e.images.map((e) => e.id);
            return lodash_1.default.pick(e, [
                "id",
                "title",
                "category",
                "user.id",
                "user.nickname",
                "hashtags",
                "images",
            ]);
        });
        return helpers_1.ok({ data: response });
    }
}
exports.GetScrapPostsController = GetScrapPostsController;
//# sourceMappingURL=get-scrap-posts-controller.js.map