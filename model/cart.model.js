module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        ticket_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'Tickets',  
                key: 'id',
            },
        },
        customer_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'Customers', 
                key: 'id',
            },
        },
        status_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: 'Statuses',  
                key: 'id',
            },
        },
    });

    Cart.associate = (models) =>    {
        Cart.belongsTo(models.Ticket, {
            foreignKey: "ticket_id",
            as: "ticket",
        });

        Cart.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "customer",
        });

        Cart.belongsTo(models.Status, {
            foreignKey: "status_id",
            as: "status",
        });

        Cart.hasMany(models.Booking, {
            foreignKey: "cart_id",
            as: "booking",
        });
    };

    return Cart;
};