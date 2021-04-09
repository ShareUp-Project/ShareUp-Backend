"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@/main/adapters");
const factories_1 = require("@/main/factories");
const middlewares_1 = require("@/main/middlewares");
const schemas_1 = require("@/validator/schemas");
exports.default = (router) => {
    router.post("/phones", middlewares_1.validationMiddleware({
        schema: schemas_1.SendCodeSchema,
        parameters: middlewares_1.Parameters.BODY,
    }), adapters_1.adaptRoute(factories_1.makeSendCodeController()));
    router.post("/phones/check", middlewares_1.validationMiddleware({
        schema: schemas_1.CheckCodeSchema,
        parameters: middlewares_1.Parameters.BODY,
    }), adapters_1.adaptRoute(factories_1.makeCheckCodeController()));
    router.post("/phones/password", middlewares_1.validationMiddleware({
        schema: schemas_1.SendCodeSchema,
        parameters: middlewares_1.Parameters.BODY,
    }), adapters_1.adaptRoute(factories_1.makeSendCodeChangePasswordController()));
};
//# sourceMappingURL=phone.js.map