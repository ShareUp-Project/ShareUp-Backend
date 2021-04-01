import { NicknameCheckController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbFindUser } from "../../usecases";

export const makeNicknameCheckController = (): Controller => {
  return new NicknameCheckController(makeDbFindUser());
};
