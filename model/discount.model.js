module.exports = (sequelize, DataTypes) => {
    const Discount = sequelize.define("Discount", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        discount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        finish_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Discount.associate = (model) => {
        Discount.hasMany(model.Booking, {
          foreignKey: "discount_id",
          as: "booking",  
        });
    };

    return Discount;
};
