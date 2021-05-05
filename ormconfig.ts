import config from "./src/main/config/env";
import { ConnectionOptions } from "typeorm";
import {
  User,
  Post,
  Image,
  Hashtag,
  Scrap,
  EditorPost,
  View,
  WeeklyView,
} from "@/domain/entities";

const connectionOptions: ConnectionOptions = {
  type: "mysql",
  host: config.mysql.host,
  port: 3306,
  username: config.mysql.username,
  password: config.mysql.password,
  database: config.mysql.name,
  synchronize: true,
  logging: true,
  entities: [User, Post, Image, Hashtag, Scrap, EditorPost, View, WeeklyView],
};

export default connectionOptions;
