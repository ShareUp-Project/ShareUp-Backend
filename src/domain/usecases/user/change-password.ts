export interface ChangePassword {
  change: (data: ChangePassword.Params) => Promise<void>;
}

export namespace ChangePassword {
  export type Params = {
    phone: string;
    password: string;
  };
}
