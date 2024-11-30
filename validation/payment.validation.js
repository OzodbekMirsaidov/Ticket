const Joi = require("joi");

const validatePayment = (payment) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    return schema.validate(payment);
};

module.exports = { validatePayment };
