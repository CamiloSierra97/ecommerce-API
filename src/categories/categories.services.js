const categoryControllers = require("./categories.controllers");

const getAllCategories = (req, res) => {
  categoryControllers
    .getAllCategories()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getCategoryById = (req, res) => {
  const id = req.params.category_id;
  categoryControllers
    .getCategoryById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const patchCategory = (req, res) => {
  const id = req.params.category_id;
  const { name, description, status } = req.body;
  categoryControllers
    .updateCategory(id, { name, description, status })
    .then((data) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `User with ID ${id}, edited succesfully` });
      } else {
        res.status(404).json({ message: "Invalid ID or missing data" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createCategory = (req, res) => {
  const { name, description, status } = req.body;
  if (name) {
    //? Controller execution
    categoryControllers
      .createCategory({ name, description, status })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    //? Error when data is missing
    res.status(400).json({
      message: "All fields must be completed",
      fields: {
        name: "string",
        description: "seting (optional)",
        status: "string (optional)",
      },
    });
  }
};

const deleteCategory = (req, res) => {
  const id = req.params.category_id;
  categoryControllers
    .deleteCategory(id)
    .then((data) => {
      if (data !== 0) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllCategories,
  getCategoryById,
  patchCategory,
  createCategory,
  deleteCategory,
};
