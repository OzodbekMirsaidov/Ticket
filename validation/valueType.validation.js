const Joi = require("joi");

const validatevenueType = (venueType) => {
    const  schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    return schema.validate(venueType);
}

module.exports = { validatevenueType} 