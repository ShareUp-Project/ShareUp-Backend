export interface AddWeeklyView {
  add: (data: AddWeeklyView.Params) => Promise<void>;
}

export namespace AddWeeklyView {
  export type Params = {
    userId: string;
    postId: string;
  };
}
