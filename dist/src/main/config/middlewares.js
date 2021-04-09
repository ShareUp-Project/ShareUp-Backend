"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_1 = require("@/main/middlewares");
exports.default = (app) => {
    app.use(middlewares_1.bodyParser);
    app.use(middlewares_1.url);
    app.use(middlewares_1.corsMiddleware);
};
//# sourceMappingURL=middlewares.js.map