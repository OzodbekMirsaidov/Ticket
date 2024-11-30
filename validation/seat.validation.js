const Joi = require("joi");

const validateseat = (Seat) => {
    const schema = Joi.object({
        sector_id: Joi.number(),
        row_number: Joi.number().required(),
        number: Joi.number().required(),
        seat_type_id: Joi.number(),
        venue_id: Joi.number(),
        location_in_schema: Joi.string().required(),
    });

    return schema.validate(Seat);
}

module.exports = { validateseat }