"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("./src/main/config/env"));
const entities_1 = require("@/domain/entities");
const connectionOptions = {
    type: "mysql",
    host: env_1.default.mysql.host,
    port: 3306,
    username: env_1.default.mysql.username,
    password: env_1.default.mysql.password,
    database: env_1.default.mysql.name,
    synchronize: true,
    logging: true,
    entities: [entities_1.User, entities_1.Post, entities_1.Image, entities_1.Hashtag, entities_1.Scrap],
};
exports.default = connectionOptions;
//# sourceMappingURL=ormconfig.js.map