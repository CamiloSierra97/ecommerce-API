const cartControllers = require("./carts.controller");

const getAllCarts = (req, res) => {
  cartControllers
    .getAllCarts()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getCartById = (req, res) => {
  const id = req.params.cart_id;
  cartControllers
    .getCartById(id)
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

const patchCart = (req, res) => {
  const id = req.params.cart_id;
  const amount = req.body;
  console.log(amount);
  cartControllers
    .updateCart(id, { amount })
    .then((data) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `Cart with ID ${id}, edited succesfully` });
      } else {
        y;
        res.status(404).json({ message: "Invalid ID or missing data" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createCart = (req, res) => {
  const amount = req.body.amount;
  const userId = req.user.id;
  const productId = req.body.productId;
  if (amount && userId && productId) {
    //? Controller execution
    cartControllers
      .createCart({ amount, userId, productId })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    //? Error when data is missing
    res.status(400).json({
      message: "All fields must be completed",
      fields: {
        amount: "number",
        userId: "string",
        productId: "string",
      },
    });
  }
};

const deleteCart = (req, res) => {
  const id = req.params.cart_id;
  cartControllers
    .deleteCart(id)
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
  getAllCarts,
  getCartById,
  patchCart,
  createCart,
  deleteCart,
};
