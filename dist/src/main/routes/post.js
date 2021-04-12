"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@/main/adapters");
const factories_1 = require("@/main/factories");
const middlewares_1 = require("@/main/middlewares");
const schemas_1 = require("@/validator/schemas");
exports.default = (router) => {
    router.post("/posts", middlewares_1.auth, middlewares_1.uploadMiddleware.array("images", 8), middlewares_1.validationMiddleware({
        schema: schemas_1.WritePostSchema,
        parameters: middlewares_1.Parameters.BODY,
    }), adapters_1.adaptRoute(factories_1.makeWritePostController()));
    router.get("/posts", middlewares_1.auth, middlewares_1.validationMiddleware({
        schema: schemas_1.GetPostsSchema,
        parameters: middlewares_1.Parameters.QUERY,
    }), adapters_1.adaptRoute(factories_1.makeGetPostsController()));
    router.post("/posts/scraps/:id", middlewares_1.auth, middlewares_1.validationMiddleware({
        schema: schemas_1.ScrapPostsSchema,
        parameters: middlewares_1.Parameters.PARAM,
    }), adapters_1.adaptRoute(factories_1.makeScrapPostController()));
    router.get("/posts/scraps", middlewares_1.auth, middlewares_1.validationMiddleware({
        schema: schemas_1.GetPostsSchema,
        parameters: middlewares_1.Parameters.QUERY,
    }), adapters_1.adaptRoute(factories_1.makeGetScrapPostsController()));
    router.delete("/posts/:id", middlewares_1.auth, middlewares_1.validationMiddleware({
        schema: schemas_1.DeletePostsSchema,
        parameters: middlewares_1.Parameters.PARAM,
    }), adapters_1.adaptRoute(factories_1.makeDeletePostController()));
};
//# sourceMappingURL=post.js.map