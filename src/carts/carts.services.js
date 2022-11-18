const cartControllers = require("./carts.controllers");

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

const getCartByProductId = (req, res) => {
  const productId = req.params.product_id;
  cartControllers
    .getCartByProductId(productId)
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
  const id = req.body.product_id;
  const amount = req.body.amount;
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
  const productId = req.body.productId;
  const userId = req.user.id;
  if (amount && userId && productId) {
    //? Controller execution
    cartControllers
      .createCart({ amount, userId, productId })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err });
      });
  } else {
    //? Error when data is missing
    res.status(400).json({
      message: "All fields must be completed",
      fields: {
        amount: "number",
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
  getCartByProductId,
  patchCart,
  createCart,
  deleteCart,
};
