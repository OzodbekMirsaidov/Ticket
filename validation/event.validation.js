const Joi = require("joi");

const validateEvent = (Event) => {
    const  schema = Joi.object({
        name: Joi.string().min(3).required(),
        photo: Joi.string().required(),
        start_date: Joi.date().required(),
        start_time: Joi.date(),
        finish_date: Joi.date().required(),
        finish_time: Joi.date().required(),
        info: Joi.string().required(),
        event_type_id: Joi.number(),
        human_category_id: Joi.number(),
        lang_id: Joi.number(),
        release_date: Joi.date().required(),

    });

    return schema.validate(Event);
}

module.exports = { validateEvent }