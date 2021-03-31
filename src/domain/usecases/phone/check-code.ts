export interface CheckCode {
  check: (data: CheckCode.Params) => boolean;
}

export namespace CheckCode {
  export type Params = {
    phone: string;
    code: string;
  };
}
