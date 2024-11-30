const bcryptjs = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("Admin", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        hashed_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        is_creator: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });

    Admin.beforeSave(async (admin, options) => {
        if (admin.changed("hashed_password")) {
            admin.hashed_password = await bcryptjs.hash(admin.hashed_password, 10);
        }
    });

    return Admin;
};