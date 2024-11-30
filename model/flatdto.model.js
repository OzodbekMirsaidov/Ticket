

module.exports = (sequelize, DataTypes) => {
    const FlatDto = sequelize.define("FlatDto", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        etaj: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        condition: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    FlatDto.associate = (model) => {
        FlatDto.hasMany(model.CustomerAddress,{
            foreignKey: "flat_id",
            as: "CustomerAddress"
        })
    };
    return FlatDto;
};
