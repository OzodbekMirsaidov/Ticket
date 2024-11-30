const Joi = require("joi");

const validateDistrict = (District) => {
    const  schema = Joi.object({
        name: Joi.string().min(3).required(),
        region_id: Joi.number(),
    });

    return schema.validate(District);
}

module.exports = { validateDistrict }