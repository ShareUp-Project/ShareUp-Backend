export interface GetNickname {
  getNickname: (data: GetNickname.Params) => Promise<GetNickname.Result>;
}

export namespace GetNickname {
  export type Params = {
    userId: string;
  };

  export type Result = {
    nickname: string;
  };
}
