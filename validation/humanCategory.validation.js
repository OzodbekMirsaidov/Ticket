const Joi = require("joi");

const validatehumanCategory = (humanCategory) => {
    const  schema = Joi.object({
        name: Joi.string().min(3).required(),
        start_age: Joi.number().required(),
        finish_age: Joi.number().required(),
        gender_id: Joi.number(),
    });

    return schema.validate(humanCategory);
}

module.exports = { validatehumanCategory} 