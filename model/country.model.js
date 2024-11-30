module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define("Country", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    
    Country.associate = (model) => {
        Country.hasMany(model.CustomerAddress, {
          foreignKey: "country_id",
          as: "CustomerAddress",
        });
};


    return Country;
};
