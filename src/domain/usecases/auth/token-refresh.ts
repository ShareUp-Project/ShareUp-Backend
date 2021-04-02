export interface TokenRefresh {
  refresh: (data: TokenRefresh.Params) => Promise<TokenRefresh.Result>;
}

export namespace TokenRefresh {
  export type Params = {
    identity: string;
  };

  export type Result = {
    accessToken: string;
    refreshToken: string;
  };
}
