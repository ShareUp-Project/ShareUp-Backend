import { createConnection } from "typeorm";
import connectionOptions from "@/../ormconfig";

export const connection = async () => {
  await createConnection(connectionOptions);
};
