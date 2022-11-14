//? Dependencies
const express = require("express");
const db = require("./utils/database");

//? Files
const config = require("./config");
const initModels = require("./models/initModels");

//? Routes
const usersRouter = require("./users/users.router");
const authRouter = require("./auth/auth.router");
const productsRouter = require("./products/products.router");
const cartsRouter = require("./carts/carts.router");
const purchasesRouter = require("./purchases/purchases.router");
const imagesRouter = require("./images/images.router");

//? Initial Configs
const app = express();

//? Seeders
// const createCategories = require("./utils/seeders/categories");
// const createImagesPacks = require("./utils/seeders/images_packs");
// const createImages = require("./utils/seeders/images");
// const createProducts = require("./utils/seeders/products");
// const createUsers = require("./utils/seeders/users");

app.use(express.json());

db.authenticate()
  .then(() => {
    console.log("Database autenticated");
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.log(err);
  });

initModels();

//? Petitions

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server OK!",
    users: `localhost:${config.port}/api/v1/users`,
  });
});

//? Verbs
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/cart", cartsRouter);
app.use("/api/v1/purchases", purchasesRouter);
app.use("/api/v1/images", imagesRouter);

app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`);
});

//? Seeders
// createCategories(db);
// createImagesPacks(db);
// createImages(db);
// createProducts(db);
// createUsers(db);
