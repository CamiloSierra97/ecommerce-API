//? Dependencies
const uuid = require("uuid");
const Products = require("../models/products.models");

const getAllProducts = async () => {
  const data = await Products.findAndCountAll();
  return data;
};

const getProductById = async (id) => {
  const data = await Products.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createProduct = async (data) => {
  const newProduct = await Products.create({
    id: uuid.v4(),
    title: data.title,
    description: data.description,
    price: data.price,
    userId: data.userId,
    categoryId: data.categoryId,
  });
  return newProduct;
};

const updateProduct = async (id, data) => {
  const response = await Products.update(data, {
    where: {
      id,
    },
  });
  return response;
};

const deleteProduct = async (id) => {
  const data = await Products.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
