//? Dependencies
const uuid = require("uuid");
const Carts = require("../models/carts.models");

const getAllCarts = async () => {
  const data = await Carts.findAndCountAll();
  return data;
};

const getCartById = async (id) => {
  const data = await Carts.findOne({
    where: id,
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
