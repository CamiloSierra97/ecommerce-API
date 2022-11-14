const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const ImagesPacks = db.define(
  "images_packs",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ImagesPacks;
