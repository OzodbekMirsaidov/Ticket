const Joi = require("joi");

const validateBooking = (booking) => {
  const schema = Joi.object({
    cart_id: Joi.number().required(),
    createdAt: Joi.date().required(),
    fineshed: Joi.date().required(),
    payment_id: Joi.number().required(),
    delivery_id: Joi.number().required(),
    discount_id: Joi.number().required(),
    status_id: Joi.number().required(),
  });

  return schema.validate(booking);
};
module.exports = { validateBooking };