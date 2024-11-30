const { FlatDto } = require("../model");
const { validateFlatDto } = require("../validation/flatdto.validation");

exports.createFlatDto = async (req, res) => {
  const { error } = validateFlatDto(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const flatDto = await FlatDto.create(req.body);
    res.status(201).send(flatDto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getFlatDtos = async (req, res) => {
  try {
    const flatDtos = await FlatDto.findAll();
    res.status(200).send(flatDtos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getFlatDtoById = async (req, res) => {
  try {
    const flatDto = await FlatDto.findByPk(req.params.id);
    if (!flatDto) return res.status(404).send("FlatDto not found");
    res.status(200).send(flatDto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateFlatDto = async (req, res) => {
    const { error } = validateFlatDto(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    try {
      const flatDto = await FlatDto.findByPk(req.params.id);
      if (!flatDto) return res.status(404).send("FlatDto not found");
  
      await flatDto.update(req.body);
      res.status(200).send(flatDto);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
exports.deleteFlatDto = async (req, res) => {
  try {
    const flatDto = await FlatDto.findByPk(req.params.id);
    if (!flatDto) return res.status(404).send("FlatDto not found");

    const flatDtoData = flatDto.toJSON();
    await flatDto.destroy();
    res.status(204).send(flatDtoData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
