const Joi = require("joi");

const validateVenue = (Venue) => {
    const  schema = Joi.object({
        name: Joi.string().min(3).required(),
        address: Joi.string().required(),
        location: Joi.string().required(),
        site: Joi.string().required(),
        phone: Joi.string().required(),
        venue_type_id: Joi.number(),
        region_id: Joi.number(),
        district_id: Joi.number(),
    });

    return schema.validate(Venue);
}

module.exports = { validateVenue }