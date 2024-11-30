module.exports = (sequelize, DataTypes) => {
    const TicketType = sequelize.define("TicketType", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ticket_id: {
            type: DataTypes.INTEGER,
        },
    });

    TicketType.associate = (model) => {
        TicketType.belongsTo(model.Ticket, {
            foreignKey: "ticket_id",
            as: "ticket", 
        });
    };


    return TicketType;
};
