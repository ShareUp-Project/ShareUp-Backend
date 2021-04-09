"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNicknameCheckController = void 0;
const controllers_1 = require("@/presentation/controllers");
const factories_1 = require("@/main/factories");
exports.makeNicknameCheckController = () => {
    return new controllers_1.NicknameCheckController(factories_1.makeDbFindUser());
};
//# sourceMappingURL=nickname-check-controller-factory.js.map