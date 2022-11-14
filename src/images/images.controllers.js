//? Dependencies
const uuid = require("uuid");
const Images = require("../models/images.models");

const createImage = async (data) => {
  const newImage = await Images.create({
    id: uuid.v4(),
    url: data.url,
  });
  return newImage;
};

const updateImage = async (id, data) => {
  const response = await Images.update(data, {
    where: {
      id,
    },
  });
  return response;
};

const deleteImage = async (id) => {
  const data = await Images.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  createImage,
  updateImage,
  deleteImage,
};
