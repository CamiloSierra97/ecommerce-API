//? Dependencies
const uuid = require("uuid");
const Carts = require("../models/carts.models");
const Products = require("../models/products.models");
const Users = require("../models/users.models");
const Categories = require("../models/categories.models");

const getAllCarts = async () => {
  const data = await Carts.findAndCountAll();
  return data;
};

const getCartById = async (id) => {
  const data = await Carts.findOne({
    where: {
      id,
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

module.exports = {
  getAllCarts,
  getCartById,
  createCart,
  updateCart,
  deleteCart,
};
