"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetDetailPostController = void 0;
const controllers_1 = require("@/presentation/controllers");
const factories_1 = require("@/main/factories");
exports.makeGetDetailPostController = () => {
    return new controllers_1.GetDetailPostController(factories_1.makeDbGetDetailPost());
};
//# sourceMappingURL=get-detail-post-controller-factory.js.map