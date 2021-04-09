"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTokenRefreshController = void 0;
const controllers_1 = require("@/presentation/controllers");
const factories_1 = require("@/main/factories");
exports.makeTokenRefreshController = () => {
    return new controllers_1.TokenRefreshController(factories_1.makeDbTokenRefresh());
};
//# sourceMappingURL=token-refresh-controller-factory.js.map