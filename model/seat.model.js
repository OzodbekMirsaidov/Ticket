module.exports = (sequelize, DataTypes) => {
    const Seat = sequelize.define("Seat", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        sector_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        row_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        venue_id: {
            type: DataTypes.INTEGER
        },
        seat_type_id: {
            type: DataTypes.INTEGER
        },
        location_in_schema: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    Seat.associate = (model) => {
        Seat.belongsTo(model.seatType, {
            foreignKey: "seat_type_id",
            as: "seatType",
        });
        Seat.belongsTo(model.Venue, {
            foreignKey: "venue_id",
            as: "venue",
        });
        Seat.hasMany(model.Ticket, {
            foreignKey: "seat_id",
            as: "ticket",
        }); 
        Seat.belongsTo(model.Sector, {
            foreignKey: "sector_id",
            as: "sector",
        });
    };


    return Seat;
}

