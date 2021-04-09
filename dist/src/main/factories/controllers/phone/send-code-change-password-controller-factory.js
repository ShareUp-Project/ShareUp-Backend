"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSendCodeChangePasswordController = void 0;
const controllers_1 = require("@/presentation/controllers");
const factories_1 = require("@/main/factories");
exports.makeSendCodeChangePasswordController = () => {
    return new controllers_1.SendCodeChangePasswordController(factories_1.makeDbSendCode(), factories_1.makeDbFindUser());
};
//# sourceMappingURL=send-code-change-password-controller-factory.js.map