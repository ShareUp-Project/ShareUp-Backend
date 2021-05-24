import Joi from "joi";

export const SetBadgeSchema = Joi.object().keys({
  nickname: Joi.string().required(),
  level: Joi.number().min(0).max(3).required(),
});
