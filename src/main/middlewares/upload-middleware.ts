import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import path from "path";
import env from "@/main/config/env";

const s3 = new aws.S3({
  accessKeyId: env.s3.access,
  secretAccessKey: env.s3.secret,
  region: env.s3.region,
});

export const uploadMiddleware = multer({
  storage: multerS3({
    s3: s3,
    bucket: env.s3.name,
    key: (req, file, cb) => {
      const extention = path.extname(file.originalname);
      cb(null, Date.now().toString() + extention);
    },
    acl: "public-read-write",
  }),
});
