//? Dempendencies
const router = require("express").Router();
const categoryServices = require("./categories.services");

//? Protect routes
const passport = require("passport");
const adminValidate = require("../middlewares/role.middleware");
require("../middlewares/auth.middleware")(passport);

//? Routes

//? /api/v1/categories
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  categoryServices.getAllCategories
);

router
  .route("category_id")
  .get(
    passport.authenticate("jwt", { session: false }),
    categoryServices.getCategoryById
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    categoryServices.createCategory
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    categoryServices.patchCategory
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    categoryServices.deleteCategory
  );
