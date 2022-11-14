const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Purchases = db.define("purchases", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  colony: {
    type: DataTypes.STRING,
  },
  zipCode: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "zip_code",
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  references: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Purchases;
