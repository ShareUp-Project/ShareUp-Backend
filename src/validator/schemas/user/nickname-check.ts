import Joi from "joi";

export const NicknameCheckSchema = Joi.object().keys({
  nickname: Joi.string().min(2).max(10).required(),
});
