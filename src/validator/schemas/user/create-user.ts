import Joi from "joi";

export const CreateUserSchema = Joi.object().keys({
  phone: Joi.string().length(11).required(),
  password: Joi.string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .required(),
  nickname: Joi.string()
    .regex(/^[가-힣a-zA-Z0-9]{2,10}$/)
    .required(),
});
