module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define("Region", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postpone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    })

    Region.associate = (model) => {
            Region.hasMany(model.Venue, {
              foreignKey: "region_id",
              as: "venue",
            });
            Region.hasMany(model.District, {
              foreignKey: "region_id",
              as: "district",
            });
            Region.hasMany(model.CustomerAddress, {
              foreignKey: "region_id",
              as: "custumerAddress",
            });
    };

    return Region;
}

