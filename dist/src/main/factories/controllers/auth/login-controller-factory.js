"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoginController = void 0;
const controllers_1 = require("@/presentation/controllers");
const factories_1 = require("@/main/factories");
exports.makeLoginController = () => {
    return new controllers_1.LoginController(factories_1.makeDbAuthentication());
};
//# sourceMappingURL=login-controller-factory.js.map