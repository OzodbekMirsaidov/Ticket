module.exports = (sequelize, DataTypes) => {
    const Gender = sequelize.define("Gender", {
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

    Gender.associate = (model) => {
        Gender.hasMany(model.HumanCategory, {
            foreignKey: "gender_id",
            as: "HumanCategory",
        });
    };


    return Gender;
};