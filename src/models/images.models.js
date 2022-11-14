const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Images = db.define("images", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  url: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
});

module.exports = Images;
