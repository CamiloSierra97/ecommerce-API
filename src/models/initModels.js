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
  Products.belongsToMany(Images, {
    through: ImagesPacks,
  });
  Images.belongsToMany(Products, {
    through: ImagesPacks,
  });

  //? Carts relations
  Carts.belongsTo(Users);
  Carts.belongsTo(Products);

  //? Categories relations
  Categories.hasMany(Products);

  //? ImagesPacks relations
  ImagesPacks.belongsTo(Products);
  ImagesPacks.belongsTo(Images);

  //? Images relations
  Images.hasOne(ImagesPacks);

  //? Products relations
  Products.hasMany(Carts);
  Products.hasMany(ImagesPacks);
  Products.hasMany(PurchaseProducts);
  Products.belongsTo(Users);
  Products.belongsTo(Categories);

  //? PurchasePRoducts relations
  PurchaseProducts.belongsTo(Products);
  PurchaseProducts.belongsTo(Purchases);

  //? Purchases relations
  Purchases.hasMany(PurchaseProducts);
};

module.exports = initModels;
