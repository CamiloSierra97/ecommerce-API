const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const ImagesPacks = require("./images_packs.models");

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
  imagesPackId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      key: "id",
      model: ImagesPacks,
    },
  },
});

module.exports = Images;
