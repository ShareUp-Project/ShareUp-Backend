"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
exports.default = {
    port: Number(process.env.SERVER_PORT),
    mysql: {
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
    },
    jwt: {
        access: process.env.JWT_SECRET,
        refresh: process.env.REFRESH_SECRET,
    },
    sens: {
        id: process.env.SENS_SERVICE_ID,
        access: process.env.SENS_ACCESS_KEY,
        secret: process.env.SENS_SECRET_KEY,
        phone: process.env.SENS_PHONE,
    },
    redis: {
        host: process.env.REDIS_HOST,
    },
    s3: {
        access: process.env.S3_ACCESS,
        secret: process.env.S3_SECRET,
        region: process.env.S3_REGION,
        name: process.env.S3_NAME,
    },
};
//# sourceMappingURL=env.js.map