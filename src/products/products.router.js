//? Dempendencies
const router = require("express").Router();
const produtServices = require("./products.services");

//? Protect routes
const passport = require("passport");
const adminValidate = require("../middlewares/role.middleware");
require("../middlewares/auth.middleware")(passport);

//? Routes

//? /api/v1/products
router.get("/", produtServices.getAllProducts);

router
  .route("/:product_id")
  .get(produtServices.getProductById)
  .post(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    produtServices.createProduct
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    produtServices.patchProduct
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    produtServices.deleteProduct
  );

module.exports = router;
