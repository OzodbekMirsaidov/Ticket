const Joi = require("joi");

const validateTicket = (Ticket) => {
    const  schema = Joi.object({
        event_id: Joi.number(),
        seat_id: Joi.number(),
        price: Joi.string().required(),
        service_fee: Joi.string().required(),
        status_id: Joi.number(),
        ticket_type: Joi.string(),

    });

    return schema.validate(Ticket);
}

module.exports = { validateTicket }  