const { SeatType } = require("../model");
const { validateseatType } = require("../validation/seatType.validation");

exports.createseatType = async (req, res) => {
  const { error } = validateseatType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const seatType = await SeatType.create(req.body);
    res.status(201).send(seatType);
  } catch (error) { 
    res.status(500).send(error);
  }
};

exports.getseatTypes = async (req, res) => {
  try {
    const seatTypes = await SeatType.findAll();
    res.status(200).send(seatTypes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getseatTypeById = async (req, res) => {
  try {
    const seatType = await SeatType.findByPk(req.params.id);
    if (!seatType) return res.status(404).send("seatType not found");
    res.status(200).send(seatType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateseatType = async (req, res) => {
  const { error } = validateseatType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const seatType = await SeatType.findByPk(req.params.id);
    if (!seatType) return res.status(404).send("seatType not found");

    await seatType.update(req.body);
    res.status(200).send(seatType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteseatType = async (req, res) => {
  try {
    const seatType = await SeatType.findByPk(req.params.id);
    if (!seatType) return res.status(404).send("seatType not found");

    const seatTypeData = seatType.toJSON();
    await seatType.destroy();
    res.status(204).send(seatTypeData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

