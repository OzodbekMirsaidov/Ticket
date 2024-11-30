const Joi = require("joi");

const validateSectorDto = (sectorDto) => {
  const schema = Joi.object({
    sector_name: Joi.string(),
  });

  return schema.validate(sectorDto);
};

module.exports = { validateSectorDto };
