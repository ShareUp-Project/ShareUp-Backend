"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@/main/adapters");
const factories_1 = require("@/main/factories");
const middlewares_1 = require("@/main/middlewares");
const schemas_1 = require("@/validator/schemas");
exports.default = (router) => {
    router.post("/auth", middlewares_1.validationMiddleware({
        schema: schemas_1.AuthenticationSchema,
        parameters: middlewares_1.Parameters.BODY,
    }), adapters_1.adaptRoute(factories_1.makeLoginController()));
    router.get("/auth/refresh", middlewares_1.refresh, adapters_1.adaptRoute(factories_1.makeTokenRefreshController()));
};
//# sourceMappingURL=auth.js.map