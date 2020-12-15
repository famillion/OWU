const Joi = require('joi');

const { regexEnum: { EMAIL, PASSWORD } } = require('../../configs');

module.exports = Joi.object({
  name: Joi.string().alphanum().min(4).max(50),
  age: Joi.number().integer().min(1).max(150),
  email: Joi.string().regex(EMAIL),
  password: Joi.string().regex(PASSWORD)
});
