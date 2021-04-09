"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require("reflect-metadata");
const env_1 = __importDefault(require("@/main/config/env"));
const app_1 = __importDefault(require("@/main/config/app"));
const db_1 = require("@/infra/db");
const PORT = env_1.default.port;
db_1.connection()
    .then(() => {
    app_1.default.listen(PORT, () => {
        console.log(`server on port ${PORT}`);
    });
})
    .catch(console.error);
//# sourceMappingURL=server.js.map