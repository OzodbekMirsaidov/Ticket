module.exports = (sequelize, DataTypes) => {
    const seatType = sequelize.define("seatType", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    seatType.associate = (model) => {
        seatType.hasMany(model.Seat, {
            foreignKey: "seatType_id",
            as: "seat",
        });
    };

    return seatType;
};
