import Joi from "joi";

export const ChangePasswordSchema = Joi.object().keys({
  phone: Joi.string().length(11).required(),
  password: Joi.string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .required(),
});
