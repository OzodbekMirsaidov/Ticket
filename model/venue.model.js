module.exports = (sequelize, DataTypes) => {
    const Venue = sequelize.define("Venue", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        site: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        venue_type_id: {
            type: DataTypes.INTEGER
        },
        region_id: {
            type: DataTypes.INTEGER
        },
        district_id: {
            type: DataTypes.INTEGER
        },
    })

    Venue.associate = (model) => {
        Venue.belongsTo(model.venueType, {
            foreignKey: "venue_type_id",
            as: "venueType",
        });
        Venue.belongsTo(model.Region, {
            foreignKey: "region_id",
            as: "region",
        });
        Venue.belongsTo(model.District, {
            foreignKey: "district_id",
            as: "district",
        }); 
        Venue.hasMany(model.Seat, {
            foreignKey: "venue_id",
            as: "seat",
        });
        Venue.hasMany(model.Event, {
            foreignKey: "venue_id",
            as: "event",
        });
    };


    return Venue;
}

