const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Users = require("./users.models");
const Categories = require("./categories.models");
const ImagesPacks = require("./images_packs.models");

const Products = db.define("products", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "active",
  },
  imagesPackId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "images_packs_id",
    references: {
      key: "id",
      model: ImagesPacks,
    },
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "user_id",
    references: {
      key: "id",
      model: Users,
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "category_id",
    references: {
      key: "id",
      model: Categories,
    },
  },
});

module.exports = Products;
