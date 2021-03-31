import Joi from "joi";

export const CreateUserSchema = Joi.object().keys({
  phone: Joi.string().length(11).required(),
  password: Joi.string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .required(),
  nickname: Joi.string().min(2).max(10).required(),
});
