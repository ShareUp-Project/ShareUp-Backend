import Joi from "joi";

export const CheckCodeSchema = Joi.object().keys({
  phone: Joi.string().length(11).required(),
  code: Joi.string().length(6).required(),
});
