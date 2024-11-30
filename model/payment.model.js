module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define("Payment", {
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
    Payment.associate = (model) => {
        Payment.hasMany(model.Booking, {
          foreignKey: "payment_id",
          as: "booking",  
        });
    };

    return Payment;
}
