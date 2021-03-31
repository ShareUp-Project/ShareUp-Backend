import Joi from "joi";

export const SendCodeSchema = Joi.object().keys({
  phone: Joi.string().length(11).required(),
});
