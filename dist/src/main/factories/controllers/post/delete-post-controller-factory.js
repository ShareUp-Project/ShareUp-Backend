"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeletePostController = void 0;
const controllers_1 = require("@/presentation/controllers");
const factories_1 = require("@/main/factories");
exports.makeDeletePostController = () => {
    return new controllers_1.DeletePostController(factories_1.makeDbDeletePost(), factories_1.makeDbFindPost());
};
//# sourceMappingURL=delete-post-controller-factory.js.map