const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Categories = db.define("categories", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    description: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "available",
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Categories;
