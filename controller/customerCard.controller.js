const { CustomerCard, Customer } = require("../model");
const { validateCustomerCard } = require("../validation/customerCard.validationn");

exports.createCustomerCard = async (req, res) => {
  const { error } = validateCustomerCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customerCard = await CustomerCard.create(req.body);
    res.status(201).send(customerCard);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerCard = async (req, res) => {
  try {
    const customerCard = await CustomerCard.findAll();
    res.status(200).send(customerCard);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerCardById = async (req, res) => {
  try {
    const customerCard = await CustomerCard.findByPk(req.params.id, {
      include: [
        {
          model: Customer,
          as: "customer",
        },
      ],
    });
    if (!customerCard) return res.status(404).send("CustomerCard not found");
    res.status(200).send(customerCard);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCustomerCard = async (req, res) => {
  const { error } = validateCustomerCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const customerCard = await CustomerCard.findByPk(req.params.id);
    if (!customerCard) return res.status(404).send("CustomerCard not found");
    await customerCard.update(req.body);
    res.status(200).send(customerCard);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCustomerCard = async (req, res) => {
  try {
    const customerCard = await CustomerCard.findByPk(req.params.id);
    if (!customerCard) return res.status(404).send("CustomerCard not found");

    const customerCardData = customerCard.toJSON();

    await customerCard.destroy();
    res.status(204).send(customerCardData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};