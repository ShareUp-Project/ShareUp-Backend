"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDetailPostController = void 0;
const helpers_1 = require("@/presentation/helpers");
const lodash_1 = __importDefault(require("lodash"));
class GetDetailPostController {
    constructor(getDetailPost) {
        this.getDetailPost = getDetailPost;
    }
    async handle(request) {
        try {
            const data = await this.getDetailPost.getDetail({ ...request });
            data.isScrap = false;
            if (data.scraps.findIndex((i) => i.userId === request.identity && i.postId === data.id) > -1)
                data.isScrap = true;
            data.scraps = data.scraps.length;
            data.hashtags = data.hashtags.map((e) => e.tag);
            data.images = data.images.map((e) => e.id);
            const response = lodash_1.default.pick(data, [
                "id",
                "title",
                "category",
                "content",
                "views",
                "user.id",
                "user.nickname",
                "hashtags",
                "images",
                "scraps",
                "isScrap",
            ]);
            return helpers_1.ok({ response });
        }
        catch (e) {
            return helpers_1.notFound();
        }
    }
}
exports.GetDetailPostController = GetDetailPostController;
//# sourceMappingURL=get-detail-post-controller.js.map