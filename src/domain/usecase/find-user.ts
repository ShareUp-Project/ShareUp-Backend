import { User } from "../entities";

export interface FindUser {
  findOne: (phone: string) => Promise<FindUser.Result>;
}

export namespace FindUser {
  export type Result = User;
}
