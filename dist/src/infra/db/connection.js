"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("@/../ormconfig"));
exports.connection = async () => {
    await typeorm_1.createConnection(ormconfig_1.default);
};
//# sourceMappingURL=connection.js.map