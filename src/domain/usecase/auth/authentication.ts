export interface Authentication {
  auth: (data: Authentication.Params) => Promise<Authentication.Result>;
}

export namespace Authentication {
  export type Params = {
    phone: string;
    password: string;
  };

  export type Result = {
    accessToken: string;
    refreshToken: string;
  };
}
