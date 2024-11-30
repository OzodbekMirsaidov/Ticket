const { SectorDto } = require("../model");
const { validateSectorDto } = require("../validation/sectordto.validation");

exports.createSectorDto = async (req, res) => {
  const { error } = validateSectorDto(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const sectordto = await SectorDto.create(req.body);
    res.status(201).send(sectordto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSectorDtos = async (req, res) => {
  try {
    const sectordtos = await SectorDto.findAll();
    res.status(200).send(sectordtos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSectorDtoById = async (req, res) => {
  try {
    const sectorDto = await SectorDto.findByPk(req.params.id);
    if (!sectorDto) return res.status(404).send("sectorDto not found");
    res.status(200).send(sectorDto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateSectorDto = async (req, res) => {
  const { error } = validateSectorDto(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const sectorDto = await SectorDto.findByPk(req.params.id);
    if (!sectorDto) return res.status(404).send("SectorDto not found");

    await sectorDto.update(req.body);
    res.status(200).send(sectorDto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteSectorDto = async (req, res) => {
  try {
    const sectorDto = await sectorDto.findByPk(req.params.id);
    if (!sectorDto) return res.status(404).send("sectorDto not found");

    const sectorDtoData = sector.toJSON();
    await sectorDto.destroy();
    res.status(204).send(sectorDtoData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
