"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddImage = void 0;
const usecases_1 = require("@/data/usecases");
const db_1 = require("@/infra/db");
const uuid_1 = require("@/infra/uuid");
exports.makeDbAddImage = () => {
    const imageRepository = new db_1.ImageRepository();
    const uuidAdapter = new uuid_1.UuidAdapter();
    return new usecases_1.DbAddImage(imageRepository, uuidAdapter);
};
//# sourceMappingURL=add-image-factory.js.map