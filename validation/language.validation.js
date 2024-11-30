const Joi = require("joi");

const validateLanguage = (language) => {
    const schema = Joi.object({
        language: Joi.string().min(3).required(),
        description: Joi.string().min(5).required(),
    });

    return schema.validate(language);
};

module.exports = { validateLanguage };
