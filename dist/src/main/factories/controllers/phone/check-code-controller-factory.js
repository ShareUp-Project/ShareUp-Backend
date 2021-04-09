"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCheckCodeController = void 0;
const check_code_controller_1 = require("@/presentation/controllers/phone/check-code-controller");
const factories_1 = require("@/main/factories");
exports.makeCheckCodeController = () => {
    return new check_code_controller_1.CheckCodeController(factories_1.makeDbCheckCode());
};
//# sourceMappingURL=check-code-controller-factory.js.map