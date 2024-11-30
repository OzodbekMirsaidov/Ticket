module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("Booking", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cart_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Carts",
          key: "id",
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fineshed: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      payment_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Payments",
          key: "id",
        },
      },
      delivery_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Deliveries",
          key: "id",
        },
      },
      discount_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Discounts",
          key: "id",
        },
      },
      status_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Statuses",
          key: "id",
        },
      },
    });
  
    Booking.associate = (model) => {
      Booking.belongsTo(model.Cart, {
        foreignKey: "cart_id",
        as: "cart",
      });
      Booking.belongsTo(model.Payment, {
        foreignKey: "payment_id",
        as: "payment",
      });
      Booking.belongsTo(model.Delivery, {
        foreignKey: "delivery_id",
        as: "delivery",
      });
      Booking.belongsTo(model.Discount, {
        foreignKey: "discount_id",
        as: "discount",
      });
      Booking.belongsTo(model.Status, {
        foreignKey: "status_id",
        as: "status",
      });
    };
  
    return Booking;
  };