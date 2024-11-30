const { TicketType, ticket } = require("../model");
const { validateTicketType } = require("../validation/ticketType.validation");

exports.createticketType = async (req, res) => {
    const { error } = validateTicketType(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const ticketType = await TicketType.create(req.body);
        res.status(201).send(ticketType);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getticketTypes = async (req, res) => {
    try {
        const ticketTypes = await TicketType.findAll();
        res.status(200).send(ticketTypes);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getticketTypeById = async (req, res) => {
    try {
        const ticketType = await TicketType.findByPk(req.params.id, {
            include: [
                {
                  model: ticket,
                  as: "ticket",
                },      
               ]
        });
        if (!ticketType) return res.status(404).send("ticketType not found");
        res.status(200).send(ticketType);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateticketType = async (req, res) => {
    const { error } = validateTicketType(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const ticketType = await TicketType.findByPk(req.params.id);
        if (!ticketType) return res.status(404).send("ticketType not found");

        await ticketType.update(req.body);
        res.status(200).send(ticketType);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteticketType = async (req, res) => {
    try {
        const ticketType = await TicketType.findByPk(req.params.id);
        if (!ticketType) return res.status(404).send("ticketType not found");

        const ticketTypeData = ticketType.toJSON();
        await ticketType.destroy();
        res.status(204).send(ticketTypeData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
