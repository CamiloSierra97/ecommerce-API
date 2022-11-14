//? Dependencies
const Categories = require("../models/categories.models");

const getAllCategories = async () => {
  const data = await Categories.findAndCountAll();
  return data;
};

const getCategoryById = async (id) => {
  const data = await Categories.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createCategory = async (data) => {
  const newCategory = await Categories.create({
    name: data.name,
    description: data.description,
    status: data.status,
  });
  return newCategory;
};

const updateCategory = async (id, data) => {
  const response = await Categories.update(data, {
    where: {
      id,
    },
  });
  return response;
};

const deleteCategory = async (id) => {
  const data = await Categories.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
