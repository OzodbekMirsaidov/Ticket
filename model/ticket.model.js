module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define("Ticket", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        event_id: {
            type: DataTypes.INTEGER
        },
        seat_id: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        service_fee: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status_id: {
            type: DataTypes.INTEGER
        },
        ticket_type: {
            type: DataTypes.STRING
        },

    })

    Ticket.associate = (model) => {
        Ticket.belongsTo(model.Event, {
            foreignKey: "event_id",  
            as: "event",
        });
        Ticket.belongsTo(model.Seat, {  
            foreignKey: "seat_id",
            as: "seat",
        });
        Ticket.belongsTo(model.Status, {
            foreignKey: "status_id",
            as: "status",
        });
        Ticket.hasMany(model.TicketType, {
            foreignKey: "ticket_id",
            as: "ticketType",
        });
        Ticket.hasMany(model.Cart, {
            foreignKey: "ticket_id",
            as: "cart",
        });
    };


    return Ticket;
}

