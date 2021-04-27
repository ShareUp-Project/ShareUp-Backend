export interface ChangeNickname {
  changeNickname: (data: ChangeNickname.Params) => Promise<void>;
}

export namespace ChangeNickname {
  export type Params = {
    userId: string;
    nickname: string;
  };
}
