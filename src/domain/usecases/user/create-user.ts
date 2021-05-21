export interface CreateUser {
  create: (user: CreateUser.Params) => Promise<string>;
}

export namespace CreateUser {
  export type Params = {
    id: string;
    phone: string;
    password: string;
    nickname: string;
  };
}
