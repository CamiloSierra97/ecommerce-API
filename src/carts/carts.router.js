//? Dempendencies
const router = require("express").Router();
const cartServices = require("./carts.services");

//? Protect routes
const passport = require("passport");
const adminValidate = require("../middlewares/role.middleware");
require("../middlewares/auth.middleware")(passport);

//? Routes

//? /api/v1/cart
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  cartServices.getAllCarts
);

router
  .route("/cart_id")
  .get(
    passport.authenticate("jwt", { session: false }),
    cartServices.getCartById
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    cartServices.createCart
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    cartServices.patchCart
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    cartServices.deleteCart
  );
