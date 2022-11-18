//? Dependencies
const uuid = require("uuid");
const Carts = require("../models/carts.models");
const Products = require("../models/products.models");
const Users = require("../models/users.models");
const ImagesPack = require("../models/images_packs.models");
const Categories = require("../models/categories.models");

const getAllCarts = async () => {
  const data = await Carts.findAndCountAll({
    attributes: {
      exclude: ["userId", "productId"],
    },
    include: [
      {
        model: Users,
        attributes: ["firstName", "lastName", "email", "country"],
      },
      {
        model: Products,
        attributes: {
          exclude: ["imagesPackId", "userId", "categoryId"],
        },
        include: [
          {
            model: ImagesPack,
          },
          {
            model: Users,
            attributes: ["firstName", "lastName", "email", "country"],
          },
          {
            model: Categories,
          },
        ],
      },
    ],
  });
  return data;
};

const getCartByProductId = async (productId) => {
  const data = await Carts.findOne({
    where: {
      productId,
    },
    attributes: {
      exclude: ["userId", "productId"],
    },
    include: [
      {
        model: Users,
        attributes: ["id", "firstName", "lastName", "email", "country"],
      },
      {
        model: Products,
        attributes: {
          exclude: ["categoryId", "imagesPackId", "userId"],
        },
        include: [
          {
            model: Categories,
          },
          {
            model: Users,
            attributes: ["id", "firstName", "lastName", "email", "country"],
          },
        ],
      },
    ],
  });
  return data;
};

const createCart = async (data) => {
  const newCart = await Carts.create({
    id: uuid.v4(),
    amount: data.amount,
    userId: data.userId,
    productId: data.productId,
  });
  return newCart;
};

const updateCart = async (id, data) => {
  const response = await Carts.update(data, {
    where: {
      id,
    },
  });
  return response;
};

const deleteCart = async (id) => {
  const data = await Carts.destroy({
    where: {
      id,
    },
  });
  return data;
};

const getUserCart = async (userId) => {
  const data = await Carts.findAll({
    where: {
      userId: userId,
    },
    attributes: {
      exclude: ["userId", "productId"],
    },
    include: [
      {
        model: Users,
        attributes: ["id", "firstName", "lastName", "email", "country"],
      },
      {
        model: Products,
        attributes: {
          exclude: ["categoryId", "imagesPackId", "userId"],
        },
      },
    ],
  });
  return data;
};

module.exports = {
  getAllCarts,
  getCartByProductId,
  createCart,
  updateCart,
  deleteCart,
  getUserCart,
};
