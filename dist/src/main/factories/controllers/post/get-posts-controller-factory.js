"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetPostsController = void 0;
const controllers_1 = require("@/presentation/controllers");
const factories_1 = require("@/main/factories");
exports.makeGetPostsController = () => {
    return new controllers_1.GetPostsController(factories_1.makeDbGetPosts());
};
//# sourceMappingURL=get-posts-controller-factory.js.map