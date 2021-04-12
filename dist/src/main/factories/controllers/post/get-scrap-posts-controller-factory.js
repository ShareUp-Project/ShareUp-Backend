"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetScrapPostsController = void 0;
const controllers_1 = require("@/presentation/controllers");
const usecases_1 = require("../../usecases");
exports.makeGetScrapPostsController = () => {
    return new controllers_1.GetScrapPostsController(usecases_1.makeDbGetScrapPosts());
};
//# sourceMappingURL=get-scrap-posts-controller-factory.js.map