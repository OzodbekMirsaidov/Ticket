const { HumanCategory, Gender } = require("../model");
const { validatehumanCategory } = require("../validation/humanCategory.validation");

exports.createhumanCategory = async (req, res) => {
  const { error } = validatehumanCategory(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const humanCategory = await HumanCategory.create(req.body);
    res.status(201).send(humanCategory);
  } catch (error) { 
    res.status(500).send(error);
  }
};

exports.gethumanCategorys = async (req, res) => {
  try {
    const humanCategorys = await HumanCategory.findAll();
    res.status(200).send(humanCategorys);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.gethumanCategoryById = async (req, res) => {
  try {
    const humanCategory = await HumanCategory.findByPk(req.params.id, {
      include: [
        {
            model: Gender,
            as: "gender",
        },
    ],
    });
    

    if (!humanCategory) return res.status(404).send("humanCategory not found");
    res.status(200).send(humanCategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updatehumanCategory = async (req, res) => {
  const { error } = validatehumanCategory(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const humanCategory = await HumanCategory.findByPk(req.params.id);
    if (!humanCategory) return res.status(404).send("humanCategory not found");

    await humanCategory.update(req.body);
    res.status(200).send(humanCategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deletehumanCategory = async (req, res) => {
  try {
    const humanCategory = await HumanCategory.findByPk(req.params.id);
    if (!humanCategory) return res.status(404).send("humanCategory not found");

    const humanCategoryData = humanCategory.toJSON();
    await humanCategory.destroy();
    res.status(204).send(humanCategoryData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

