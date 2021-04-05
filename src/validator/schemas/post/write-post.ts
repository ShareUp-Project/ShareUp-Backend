import Joi from "joi";

export const WritePostSchema = Joi.object().keys({
  title: Joi.string().max(50).required(),
  content: Joi.string().max(500),
  category: Joi.string().valid(
    "paper",
    "plastic",
    "glass",
    "styrofoam",
    "vinyl",
    "can",
    "clothing",
    "etc"
  ),
  tags: Joi.array().items(Joi.string()),
  images: Joi.array().max(8),
});
