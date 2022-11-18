const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Users = require("./users.models");
const Products = require("./products.models");

const Carts = db.define("carts", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "productId",
    references: {
      key: "id",
      model: Products,
    },
  },
});

module.exports = Carts;
