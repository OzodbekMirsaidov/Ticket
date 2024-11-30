const Joi = require("joi");

const validateVenuePhoto = (VenuePhoto) => {
    const  schema = Joi.object({
        venue_id: Joi.number(),
        url: Joi.string().min(3).required(),
    });

    return schema.validate(VenuePhoto);
}

module.exports = { validateVenuePhoto }