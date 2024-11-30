const Joi = require("joi");

const validateFlatDto = (flatDto) => {
  const schema = Joi.object({
    etaj: Joi.number().optional(),
    condition: Joi.string().optional(),
  });

  return schema.validate(flatDto);
};

module.exports = { validateFlatDto };
