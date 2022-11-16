//? Dempendencies
const router = require("express").Router();
const cartServices = require("./carts.services");

//? Protect routes
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

//? Routes

//? /api/v1/cart
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
  .get(
    passport.authenticate("jwt", { session: false }),
    cartServices.getCartById
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    cartServices.patchCart
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    cartServices.deleteCart
  );
module.exports = router;
