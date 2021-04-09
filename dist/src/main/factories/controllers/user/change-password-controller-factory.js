"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeChangePasswordController = void 0;
const controllers_1 = require("@/presentation/controllers");
const factories_1 = require("@/main/factories");
exports.makeChangePasswordController = () => {
    return new controllers_1.ChangePasswordController(factories_1.makeDbFindUser(), factories_1.makeDbChangePassword());
};
//# sourceMappingURL=change-password-controller-factory.js.map