import { config } from "dotenv";

config();

export default {
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
};
