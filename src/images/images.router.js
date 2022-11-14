//? Dempendencies
const router = require("express").Router();
const imageServices = require("./images.services");

//? Protect routes
const passport = require("passport");
const adminValidate = require("../middlewares/role.middleware");
require("../middlewares/auth.middleware")(passport);

//? Routes

//? /api/v1/images

router
  .route("/")
  .post(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    imageServices.createImage
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    imageServices.updateImage
  );

router.delete(
  "/:image_id",
  passport.authenticate("jwt", { session: false }),
  adminValidate,
  imageServices.deleteImage
);

module.exports = router;
