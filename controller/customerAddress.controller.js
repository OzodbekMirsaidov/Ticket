const { CustomerAddress, Customer, Country, Region, District, FlatDto } = require("../model");
const {   validateCustomerAddress,} = require("../validation/customerAddress.validation");

exports.createCustomerAddress = async (req, res) => {
    const { error } = validateCustomerAddress(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const customer_address = await CustomerAddress.create(req.body);
        res.status(201).send(customer_address);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getCustomerAddress = async (req, res) => {
    try {
        const customer_address = await CustomerAddress.findAll();
        res.status(200).send(customer_address);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getCustomerAddressById = async (req, res) => {
    try {
        const customer_address = await CustomerAddress.findByPk(req.params.id, {
            include: [
                {
                    model: Customer,
                    as: "customer",
                },
                {
                    model: Country,
                    as: "country"
                },
                {
                    model: Region,
                    as: "region",
                },
                {
                    model: District,
                    as: "district",
                },
                {
                    model: FlatDto,
                    as: "flatDto"
                }
            ],
        });
        if (!customer_address) return res.status(404).send("Customer_address not found");
        res.status(200).send(customer_address);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateCustomerAddress = async (req, res) => {
    const { error } = validateCustomerAddress(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const customer_address = await CustomerAddress.findByPk(req.params.id);
        if (!customer_address) return res.status(404).send("Customer_address not found");
        await customer_address.update(req.body);
        res.status(200).send(customer_address);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteCustomerAddress = async (req, res) => {
    try {
        const customer_address = await CustomerAddress.findByPk(req.params.id);
        if (!customer_address) return res.status(404).send("Customer_address not found");

        const customer_addressData = customer_address.toJSON();

        await customer_address.destroy();
        res.status(204).send(customer_addressData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};