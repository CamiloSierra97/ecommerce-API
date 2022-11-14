const Categories = require("../../models/categories.models");

const createCategories = () => {
  Categories.bulkCreate([
    { id: 1, name: "Smartphones" },
    { id: 2, name: "Smart TV" },
    { id: 3, name: "Computers" },
    { id: 4, name: "Clothes" },
    { id: 5, name: "Health" },
    { id: 6, name: "Trends" },
    { id: 7, name: "Beauty" },
    { id: 8, name: "Sports" },
    { id: 9, name: "Jewelry" },
    { id: 10, name: "Pets" },
    { id: 11, name: "Technology" },
    { id: 12, name: "Home appliances" },
  ]);
};

module.exports = createCategories;
