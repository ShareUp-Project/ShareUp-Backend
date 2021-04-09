"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptMiddleware = void 0;
exports.adaptMiddleware = (middleware) => {
    return async (req, res, next) => {
        var _a;
        const request = {
            token: (_a = req.headers) === null || _a === void 0 ? void 0 : _a["authorization"],
            ...(req.headers || {}),
        };
        const httpResponse = await middleware.handle(request);
        if (httpResponse.statusCode === 200) {
            Object.assign(req, httpResponse.body);
            next();
        }
        else {
            res
                .status(httpResponse.statusCode)
                .json({ error: httpResponse.body.message });
        }
    };
};
//# sourceMappingURL=express-middleware.js.map