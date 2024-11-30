const Joi = require("joi");

const validateStatus = (status) => {
    const schema = Joi.object({
        status: Joi.string().min(3).required(),
    });

    return schema.validate(status);
};

module.exports = { validateStatus };
