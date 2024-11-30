const { EventType } = require("../model");
const { validateEventType } = require("../validation/eventType.validation");

exports.createeventType = async (req, res) => {
  const { error } = validateEventType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const eventType = await EventType.create(req.body);
    res.status(201).send(eventType);
  } catch (error) { 
    res.status(500).send(error);
  }
};

exports.geteventTypes = async (req, res) => {
  try {
    const eventType = await EventType.findAll();
    res.status(200).send(eventType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.geteventTypeById = async (req, res) => {
  try {
    const eventType = await EventType.findByPk(req.params.id);
    if (!eventType) return res.status(404).send("eventType not found");
    res.status(200).send(eventType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateeventType = async (req, res) => {
  const { error } = validateEventType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const eventType = await EventType.findByPk(req.params.id);
    if (!eventType) return res.status(404).send("eventType not found");

    await eventType.update(req.body);
    res.status(200).send(eventType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteeventType = async (req, res) => {
  try {
    const eventType = await EventType.findByPk(req.params.id);
    if (!eventType) return res.status(404).send("eventType not found");

    const eventTypeData = eventType.toJSON();
    await eventType.destroy();
    res.status(204).send(eventTypeData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

