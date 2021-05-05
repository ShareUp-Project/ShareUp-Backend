import { GetDetailPostController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import {
  makeDbGetDetailPost,
  makeDbAddView,
  makeDbFindOneView,
  makeDbAddWeeklyView,
  makeDbFindOneWeeklyView,
} from "@/main/factories";

export const makeGetDetailPostController = (): Controller => {
  return new GetDetailPostController(
    makeDbGetDetailPost(),
    makeDbAddView(),
    makeDbFindOneView(),
    makeDbAddWeeklyView(),
    makeDbFindOneWeeklyView()
  );
};
