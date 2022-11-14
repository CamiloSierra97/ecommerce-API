const productControllers = require("./products.controllers");

const getAllProducts = (req, res) => {
  productControllers
    .getAllProducts()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getProductById = (req, res) => {
  const id = req.params.product_id;
  productControllers
    .getProductById(id)
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

const createProduct = (req, res) => {
  const { title, description, price } = req.body;
  const userId = req.user.id;
  const categoryId = req.params.category_id;
  if (title && price) {
    //? Controller execution
    productControllers
      .createProduct({ title, description, price, userId, categoryId })
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
        title: "string",
        description: "string (optional)",
        price: "number",
      },
    });
  }
};

const patchProduct = (req, res) => {
  const id = req.params.product_id;
  const { title, description, price } = req.body;
  productControllers
    .updateProduct(id, { title, description, price })
    .then((data) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `Product with ID ${id}, edited succesfully` });
      } else {
        res.status(404).json({ message: "Invalid ID or missing data" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteProduct = (req, res) => {
  const id = req.params.product_id;
  productControllers
    .deleteProduct(id)
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
  getAllProducts,
  getProductById,
  createProduct,
  patchProduct,
  deleteProduct,
};
