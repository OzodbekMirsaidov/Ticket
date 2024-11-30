module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("Event", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        start_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        finish_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        finish_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        info: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        event_type_id: {
            type: DataTypes.INTEGER
        },
        human_category_id: {
            type: DataTypes.INTEGER
        },
        venue_id: {
            type: DataTypes.INTEGER
        },
        lang_id: {
            type: DataTypes.INTEGER
        },
        finish_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },  
    })

    Event.associate = (model) => {
        Event.belongsTo(model.eventType, {
            foreignKey: "event_type_id",  
            as: "eventType",
        });
        Event.belongsTo(model.HumanCategory, {  
            foreignKey: "human_category_id",
            as: "humanCategory",
        });
        Event.belongsTo(model.Language, {
            foreignKey: "lang_id",
            as: "language",
        });
        Event.hasMany(model.Ticket, {
            foreignKey: "event_id",
            as: "ticket",
        });
    };


    return Event;
}

