const Joi = require('joi');

const { regexEnum: { EMAIL, PASSWORD } } = require('../../configs');

module.exports = Joi.object({
  name: Joi.string().alphanum().min(4).max(50)
    .required(),
  age: Joi.number().integer().min(1).max(150)
    .required(),
  email: Joi.string().regex(EMAIL).required(),
  password: Joi.string().regex(PASSWORD).required()
});
