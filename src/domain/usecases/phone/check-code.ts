export interface CheckCode {
  check: (data: CheckCode.Params) => Promise<boolean>;
}

export namespace CheckCode {
  export type Params = {
    phone: string;
    code: string;
  };
}
