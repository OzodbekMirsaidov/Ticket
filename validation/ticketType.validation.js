const Joi = require("joi");

const validateTicketType = (TicketType) => {
    const schema = Joi.object({
        color: Joi.string().min(3).required(),
        name: Joi.string().required(),
        ticket_id: Joi.number().required(),
    });

    return schema.validate(TicketType);
};

module.exports = { validateTicketType };
