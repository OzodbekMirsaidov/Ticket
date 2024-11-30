const { Booking, Cart, Payment, Delivery, Discount, Status } = require("../model");
const { validateBooking } = require("../validation/booking.validation");

exports.createBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const booking = await Booking.create(req.body);
    res.status(201).send(booking);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getBooking = async (req, res) => {
  try {
    const booking = await Booking.findAll();
    res.status(200).send(booking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id, {
      include: [
        {
          model: Cart,
          as: "cart",
        },
        {
          model: Payment,
          as: "payment",
        },
        {
          model: Delivery,
          as: "delivery",
        },
        {
          model: Discount,
          as: "discount",
        },
        {
          model: Status,
          as: "status",
        },
      ],
    });
    if (!booking) return res.status(404).send("Booking not found");
    res.status(200).send(booking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).send("Booking not found");
    await booking.update(req.body);
    res.status(200).send(booking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).send("Booking not found");

    const bookingData = booking.toJSON();

    await booking.destroy();
    res.status(204).send(bookingData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};