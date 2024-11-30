const Joi = require("joi");

const validateCart = (cart) => {
    const schema = Joi.object({
        ticket_id: Joi.number().integer().required(),
        customer_id: Joi.number().integer().required(),
        status_id: Joi.number().integer().required(),
    });

    return schema.validate(cart);
};

module.exports = { validateCart };