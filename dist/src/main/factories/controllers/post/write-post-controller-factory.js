"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWritePostController = void 0;
const controllers_1 = require("@/presentation/controllers");
const factories_1 = require("@/main/factories");
exports.makeWritePostController = () => {
    return new controllers_1.WritePostController(factories_1.makeDbWritePost(), factories_1.makeDbAddHashtag(), factories_1.makeDbAddImage());
};
//# sourceMappingURL=write-post-controller-factory.js.map