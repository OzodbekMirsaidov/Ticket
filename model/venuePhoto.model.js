


module.exports = (sequelize, DataTypes) => {
    const VenuePhoto = sequelize.define("VenuePhoto", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        venue_id: {
            type: DataTypes.INTEGER,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    })

    VenuePhoto.associate = (model) => {
        VenuePhoto.belongsTo(model.Venue, {
            foreignKey: "venue_id",
            as: "Venue",
        });
    };

    return VenuePhoto;
}

