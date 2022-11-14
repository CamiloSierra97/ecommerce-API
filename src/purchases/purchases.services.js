const purchaseControllers = require("./purchases.controllers");

const getAllPurchases = (req, res) => {
  purchaseControllers
    .getAllPurchases()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getPurchaseById = (req, res) => {
  const id = req.params.purchse_id;
  purchaseControllers
    .getPurchaseById(id)
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

const patchPurchase = (req, res) => {
  const id = req.params.purchase_id;
  const { street, colony, zipCode, city, references } = req.body;
  purchaseControllers
    .updatePurchase(id, {
      street,
      colony,
      zipCode,
      city,
      references,
    })
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

const createPurchase = (req, res) => {
  const { street, colony, zipCode, city, references } = req.body;
  if (zipCode && city && references) {
    //? Controller execution
    purchaseControllers
      .createPurchase({ street, colony, zipCode, city, references })
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
        street: "string",
        colony: "string (optional)",
        zipCode: "integer",
        city: "string",
        references: "string",
      },
    });
  }
};

const deletePurchase = (req, res) => {
  const id = req.params.purchase_id;
  purchaseControllers
    .deletePurchase(id)
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
  getAllPurchases,
  getPurchaseById,
  patchPurchase,
  createPurchase,
  deletePurchase,
};
