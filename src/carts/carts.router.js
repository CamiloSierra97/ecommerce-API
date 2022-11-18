//? Dempendencies
const router = require("express").Router();
const cartServices = require("./carts.services");

//? Protect routes
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

//? Routes

//? /api/v1/carts
router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    cartServices.getAllCarts
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    cartServices.createCart
  );

router
  .route("/:cart_id")
  .delete(
    passport.authenticate("jwt", { session: false }),
    cartServices.deleteCart
  );

router
  .route("/:product_id")
  .get(
    passport.authenticate("jwt", { session: false }),
    cartServices.getCartByProductId
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    cartServices.patchProductCart
  );

module.exports = router;
