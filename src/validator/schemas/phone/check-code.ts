import Joi from "joi";

export const CheckCodeBodySchema = Joi.object().keys({
  code: Joi.string().length(6).required(),
});

export const CheckCodeQuerySchema = Joi.object().keys({
  phone: Joi.string().length(11).required(),
});
