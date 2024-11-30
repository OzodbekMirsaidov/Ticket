module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define("Status", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Status.associate = (model) => {
        Status.hasMany(model.Ticket, {
            foreignKey: "status_id",
            as: "ticket",
        });
        Status.hasMany(model.Booking, {
            foreignKey: "status_id",
            as: "booking",
        });
        Status.hasMany(model.Cart, {
            foreignKey: "status_id",
            as: "cart",
        });
    };

    return Status;
};
