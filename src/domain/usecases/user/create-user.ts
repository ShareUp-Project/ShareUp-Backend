export interface CreateUser {
  create: (user: CreateUser.Params) => Promise<void>;
}

export namespace CreateUser {
  export type Params = {
    id: string;
    phone: string;
    password: string;
    nickname: string;
  };
}
