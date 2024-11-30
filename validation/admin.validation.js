const Joi = require("joi");

const validateAdmin = (admin) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    login: Joi.string().min(3).required(),
    hashed_password: Joi.string().min(6).required(),
    is_active: Joi.boolean().optional(),
    is_creator: Joi.boolean().optional(),
  });

  return schema.validate(admin);
};

module.exports = { validateAdmin };