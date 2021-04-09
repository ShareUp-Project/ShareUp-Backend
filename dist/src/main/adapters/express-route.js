"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
exports.adaptRoute = (controller) => {
    return async (req, res) => {
        const request = {
            ...(req.body || {}),
            ...(req.params || {}),
            ...(req.query || {}),
            ...(req["decoded"] || {}),
            images: req["files"] || null,
        };
        const httpResponse = await controller.handle(request);
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            res.status(httpResponse.statusCode).json(httpResponse.body);
        }
        else {
            res
                .status(httpResponse.statusCode)
                .json({ error: httpResponse.body.message });
        }
    };
};
//# sourceMappingURL=express-route.js.map