"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const path_1 = __importDefault(require("path"));
const env_1 = __importDefault(require("@/main/config/env"));
const s3 = new aws_sdk_1.default.S3({
    accessKeyId: env_1.default.s3.access,
    secretAccessKey: env_1.default.s3.secret,
    region: env_1.default.s3.region,
});
exports.uploadMiddleware = multer_1.default({
    storage: multer_s3_1.default({
        s3: s3,
        bucket: env_1.default.s3.name,
        key: (req, file, cb) => {
            const extention = path_1.default.extname(file.originalname);
            cb(null, Date.now().toString() + extention);
        },
        acl: "public-read-write",
    }),
});
//# sourceMappingURL=upload-middleware.js.map