module.exports = (sequelize, DataTypes) => {
    const eventType = sequelize.define("eventType", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        parent_event_type_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    eventType.associate = (model) => {
        eventType.hasMany(model.Event, {
            foreignKey: "event_type_id",
            as: "event",
        });
    };

    return eventType;   
};
