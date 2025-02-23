const Joi = require("joi");

const blogSchema = Joi.object({
  blog: Joi.object({
    title: Joi.string().required(),
    about: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string(),
    price: Joi.number().required().min(0),
    location: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().allow("", null),
  }).required(),
});

const reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});

module.exports = { blogSchema, reviewSchema };
