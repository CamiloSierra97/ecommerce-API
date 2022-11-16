//? Dependencies
const uuid = require("uuid");
const Products = require("../models/products.models");
const ImagesPacks = require("../models/images_packs.models");
const Images = require("../models/images.models");
const Categories = require("../models/categories.models");
const Users = require("../models/users.models");

const getAllProducts = async () => {
  const data = await Products.findAll({
    attributes: {
      exclude: ["imagesPackId", "categoryId"],
    },
    include: [
      {
        model: Users,
      },
      {
        model: Categories,
      },
      {
        model: ImagesPacks,
        attributes: {
          exclude: ["id"],
        },
        include: {
          model: Images,
          attributes: {
            exclude: ["imagesPackId"],
          },
        },
      },
    ],
  });
  return data;
};

const getProductById = async (id) => {
  const data = await Products.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: ["imagesPackId", "categoryId", "userId"],
    },
    include: [
      {
        model: Users,
      },
      {
        model: Categories,
      },
      {
        model: ImagesPacks,
        attributes: {
          exclude: ["id"],
        },
        include: {
          model: Images,
          attributes: {
            exclude: ["imagesPackId"],
          },
        },
      },
    ],
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
