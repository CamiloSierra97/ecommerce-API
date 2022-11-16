const Carts = require("./carts.models");
const Categories = require("./categories.models");
const ImagesPacks = require("./images_packs.models");
const Images = require("./images.models");
const Products = require("./products.models");
const PurchaseProducts = require("./purchase_products.models");
const Purchases = require("./purchases.models");
const Users = require("./users.models");

const initModels = () => {
  //? Many to many relations
  Products.belongsToMany(Purchases, {
    through: PurchaseProducts,
  });
  Purchases.belongsToMany(Products, {
    through: PurchaseProducts,
  });
  Users.belongsToMany(Products, {
    through: Carts,
  });
  Products.belongsToMany(Users, {
    through: Carts,
  });

  //? Carts relations
  Carts.belongsTo(Products);
  Carts.belongsTo(Users);

  //? Categories relations
  Categories.hasMany(Products);

  //? ImagesPacks relations
  ImagesPacks.hasOne(Products);
  ImagesPacks.hasMany(Images);

  //? Images relations
  Images.belongsTo(ImagesPacks);

  //? Products relations
  Products.hasMany(Carts);
  Products.hasMany(PurchaseProducts);
  Products.belongsTo(Users);
  Products.belongsTo(Categories);
  Products.belongsTo(ImagesPacks);

  //? PurchasePRoducts relations
  PurchaseProducts.belongsTo(Products);
  PurchaseProducts.belongsTo(Purchases);

  //? Purchases relations
  Purchases.hasMany(PurchaseProducts);

  //? Users relations
  Users.hasMany(Products);
  Users.hasMany(Carts);
};

module.exports = initModels;
