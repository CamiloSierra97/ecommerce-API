const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Products = require("./products.models");
const Images = require("./images.models");

const ImagesPacks = db.define("images_packs", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      key: "id",
      model: Products,
    },
  },
  imageId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      key: "id",
      model: Images,
    },
  },
});

module.exports = ImagesPacks;
