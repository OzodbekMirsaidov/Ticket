
module.exports = (sequelize, DataTypes) => {
    const District = sequelize.define("District", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        region_id: {
            type: DataTypes.INTEGER,

        },
    })

    District.associate = (model) => {
        District.belongsTo(model.Region, {
            foreignKey: "region_id",
            as: "region",
        });
        District.hasMany(model.Venue,{
            foreignKey: "district_id",
            as: "Venue"
        })
        District.hasMany(model.CustomerAddress,{
            foreignKey: "district_id",
            as: "CustomerAddress"
        })
    };

    return District;
}

