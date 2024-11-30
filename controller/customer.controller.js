const { Customer, Gender, Language } = require("../model");
const { validateCustomer } = require("../validation/customer.validation");

exports.createCustomer = async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customer = await Customer.create(req.body);
    res.status(201).send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findAll();
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id, {
      include: [
        {
          model: Gender,
          as: "gender",
        },
        {
          model: Language,
          as: "language",
        },
      ],
    });
    if (!customer) return res.status(404).send("Customer not found");
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCustomer = async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).send("Customer not found");
    await customer.update(req.body);
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).send("Customer not found");

    const customerData = customer.toJSON();

    await customer.destroy();
    res.status(204).send(customerData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};