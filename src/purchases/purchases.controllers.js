//? Dependencies
const uuid = require("uuid");
const Purchases = require("../models/purchases.models");

const getAllPurchases = async () => {
  const data = Purchases.findAndCountAll();
  return data;
};

const getPurchaseById = (id) => {
  const data = Purchases.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createPurchase = async (data) => {
  const newPurchase = await Purchases.create({
    id: uuid.v4(),
    street: data.street,
    colony: data.colony,
    zipCode: data.zipCode,
    city: data.city,
    referencies: data.referencies,
  });
  return newPurchase;
};

const updatePurchase = async (id, data) => {
  const response = await Purchases.update(data, {
    where: {
      id,
    },
  });
  return response;
};

const deletePurchase = async (id) => {
  const data = await Purchases.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllPurchases,
  getPurchaseById,
  createPurchase,
  updatePurchase,
  deletePurchase,
};
