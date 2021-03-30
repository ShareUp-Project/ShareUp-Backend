import Joi from "joi";

export const AuthenticationSchema = Joi.object().keys({
  phone: Joi.string().length(11).required(),
  password: Joi.string()
    .regex(/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .required(),
});
