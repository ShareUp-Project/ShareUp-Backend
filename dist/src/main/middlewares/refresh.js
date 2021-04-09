"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh = void 0;
const adapters_1 = require("@/main/adapters");
const factories_1 = require("@/main/factories");
exports.refresh = adapters_1.adaptMiddleware(factories_1.makeRefreshMiddleware());
//# sourceMappingURL=refresh.js.map