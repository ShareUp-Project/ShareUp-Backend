"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeScrapPostController = void 0;
const controllers_1 = require("@/presentation/controllers");
const factories_1 = require("@/main/factories");
exports.makeScrapPostController = () => {
    return new controllers_1.ScrapPostController(factories_1.makeDbScrapPost());
};
//# sourceMappingURL=scrap-post-controller-factory.js.map