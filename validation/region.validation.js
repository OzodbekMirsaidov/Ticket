const Joi = require("joi");

const validateregion = (region) => {
    const  schema = Joi.object({
        name: Joi.string().min(3).required(),
        postpone: Joi.number().required(),
    });

    return schema.validate(region);
}

module.exports = { validateregion} 