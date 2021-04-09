"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPostsController = void 0;
const helpers_1 = require("@/presentation/helpers");
const lodash_1 = __importDefault(require("lodash"));
class GetPostsController {
    constructor(getPosts) {
        this.getPosts = getPosts;
    }
    async handle(request) {
        const data = await this.getPosts.get(request);
        const response = lodash_1.default.map(data, (e) => {
            e.isScrap = false;
            if (e.scraps.findIndex((i) => i.userId === request.identity && i.postId === e.id) > -1)
                e.isScrap = true;
            e.scraps = e.scraps.length;
            e.hashtags = e.hashtags.map((e) => e.tag);
            e.images = e.images.map((e) => e.id);
            return lodash_1.default.pick(e, [
                "id",
                "title",
                "category",
                "views",
                "user.id",
                "user.nickname",
                "hashtags",
                "images",
                "scraps",
                "isScrap",
            ]);
        });
        return helpers_1.ok({ data: response });
    }
}
exports.GetPostsController = GetPostsController;
//# sourceMappingURL=get-posts-controller.js.map