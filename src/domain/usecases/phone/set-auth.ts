export interface SetAuth {
  setAuthCode: (data: SetAuth.Params) => void;
}

export namespace SetAuth {
  export type Params = {
    phone: string;
    code: string;
  };
}
