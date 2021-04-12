"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCancleScrapController = void 0;
const controllers_1 = require("@/presentation/controllers");
const factories_1 = require("@/main/factories");
exports.makeCancleScrapController = () => {
    return new controllers_1.CancleScrapController(factories_1.makeDbCancleScrap());
};
//# sourceMappingURL=cancle-scrap-controller-factory.js.map