module.exports = (sequelize, DataTypes) => {
    const CustomerAddress = sequelize.define("CustomerAddress", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Customers",
          key: "id",
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Countries",
          key: "id",
        },
      },
      region_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Regions",
          key: "id",
        },
      },
      district_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Districts",
          key: "id",
        },
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      house: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flat_id: {
        type: DataTypes.INTEGER,
       
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_index: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      info: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    CustomerAddress.associate = (model) => {
        CustomerAddress.belongsTo(model.Customer, {
        foreignKey: "customer_id",
        as: "customer",
      });
      CustomerAddress.belongsTo(model.Country, {
        foreignKey: "country_id",
        as: "country",
      });
      CustomerAddress.belongsTo(model.Region, {
        foreignKey: "region_id",
        as: "region",
      });
      CustomerAddress.belongsTo(model.District, {
        foreignKey: "district_id",
        as: "district",
      });
      CustomerAddress.belongsTo(model.FlatDto, {
        foreignKey: "flat_id",
        as: "flatDto",
      });
    };
  
    return CustomerAddress;
  };