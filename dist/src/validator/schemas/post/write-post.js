"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WritePostSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.WritePostSchema = joi_1.default.object().keys({
    title: joi_1.default.string().max(50).required(),
    content: joi_1.default.string().max(500),
    category: joi_1.default.string().valid("paper", "plastic", "glass", "styrofoam", "vinyl", "can", "clothing", "etc"),
    tags: joi_1.default.array().items(joi_1.default.string()),
    images: joi_1.default.array().max(8),
});
//# sourceMappingURL=write-post.js.map