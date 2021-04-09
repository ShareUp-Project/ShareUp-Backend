"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignupController = void 0;
const controllers_1 = require("@/presentation/controllers");
const factories_1 = require("@/main/factories");
exports.makeSignupController = () => {
    return new controllers_1.SignUpController(factories_1.makeDbCreateUser(), factories_1.makeDbFindUser());
};
//# sourceMappingURL=signup-controller-factory.js.map