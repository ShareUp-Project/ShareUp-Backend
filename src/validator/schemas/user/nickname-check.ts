import Joi from "joi";

export const NicknameCheckSchema = Joi.object().keys({
  nickname: Joi.string()
    .regex(/^[가-힣a-zA-Z0-9]{2,10}$/)
    .required(),
});
