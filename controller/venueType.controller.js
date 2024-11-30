const { VenueType } = require("../model");
const { validatevenueType } = require("../validation/valueType.validation");

exports.createvenueType = async (req, res) => {
  const { error } = validatevenueType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venueType = await VenueType.create(req.body);
    res.status(201).send(venueType);
  } catch (error) { 
    res.status(500).send(error);
  }
};

exports.getvenueTypes = async (req, res) => {
  try {
    const venueTypes = await VenueType.findAll();
    res.status(200).send(venueTypes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getvenueTypeById = async (req, res) => {
  try {
    const venueType = await VenueType.findByPk(req.params.id);
    if (!venueType) return res.status(404).send("venueType not found");
    res.status(200).send(venueType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updatevenueType = async (req, res) => {
  const { error } = validatevenueType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venueType = await VenueType.findByPk(req.params.id);
    if (!venueType) return res.status(404).send("venueType not found");

    await venueType.update(req.body);
    res.status(200).send(venueType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deletevenueType = async (req, res) => {
  try {
    const venueType = await VenueType.findByPk(req.params.id);
    if (!venueType) return res.status(404).send("venueType not found");

    const venueTypeData = venueType.toJSON();
    await venueType.destroy();
    res.status(204).send(venueTypeData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

