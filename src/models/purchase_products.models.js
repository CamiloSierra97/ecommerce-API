const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Products = require("./products.models");
const Purchases = require("./purchases.models");

const PurchaseProducts = db.define("purchase_products", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "product_id",
    references: {
      key: "id",
      model: Products,
    },
  },
  purchaseId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "purchase_id",
    references: {
      key: "id",
      model: Purchases,
    },
  },
});

module.exports = PurchaseProducts;
