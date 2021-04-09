"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@/main/adapters");
const factories_1 = require("@/main/factories");
const middlewares_1 = require("@/main/middlewares");
const schemas_1 = require("@/validator/schemas");
exports.default = (router) => {
    router.post("/users", middlewares_1.validationMiddleware({
        schema: schemas_1.CreateUserSchema,
        parameters: middlewares_1.Parameters.BODY,
    }), adapters_1.adaptRoute(factories_1.makeSignupController()));
    router.post("/users/nickname", middlewares_1.validationMiddleware({
        schema: schemas_1.NicknameCheckSchema,
        parameters: middlewares_1.Parameters.BODY,
    }), adapters_1.adaptRoute(factories_1.makeNicknameCheckController()));
    router.put("/users/password", middlewares_1.validationMiddleware({
        schema: schemas_1.ChangePasswordSchema,
        parameters: middlewares_1.Parameters.BODY,
    }), adapters_1.adaptRoute(factories_1.makeChangePasswordController()));
};
//# sourceMappingURL=user.js.map