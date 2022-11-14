//? Dempendencies
const router = require("express").Router();
const purchaseServices = require("./purchases.services");

//? Protect routes
const passport = require("passport");
const adminValidate = require("../middlewares/role.middleware");
require("../middlewares/auth.middleware")(passport);

//? Routes

//? /api/v1/purchases
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  purchaseServices.getAllPurchases
);

router
  .route("/purchase_id")
  .get(
    passport.authenticate("jwt", { session: false }),
    purchaseServices.getPurchaseById
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    purchaseServices.createPurchase
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    purchaseServices.patchPurchase
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    purchaseServices.deletePurchase
  );

module.exports = router;
