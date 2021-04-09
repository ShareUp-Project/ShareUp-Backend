"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSendCodeController = void 0;
const controllers_1 = require("@/presentation/controllers");
const factories_1 = require("@/main/factories");
exports.makeSendCodeController = () => {
    return new controllers_1.SendCodeController(factories_1.makeDbSendCode(), factories_1.makeDbFindUser());
};
//# sourceMappingURL=send-code-controller-factory.js.map