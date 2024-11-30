const bcryptjs = require('bcryptjs');
const { options } = require('joi');
const { Sequeliza, DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    const Delivery = sequelize.define("Delivery", {
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

    Delivery.associate = (model) => {
        Delivery.hasMany(model.Booking, {
          foreignKey: "delivery_id",
          as: "booking",  
        });
    };

    return Delivery;
};
