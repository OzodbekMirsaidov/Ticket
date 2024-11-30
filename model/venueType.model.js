module.exports = (sequelize, DataTypes) => {
    const venueType = sequelize.define("venueType", {
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

    venueType.associate = (model) => {
        venueType.hasMany(model.Venue, {
            foreignKey: "venue_type_id",
            as: "venue",
        });
    };

    return venueType;
};
