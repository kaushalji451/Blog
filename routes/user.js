const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/user");
const passport = require("passport");
const {saveRedirect} = require("../middleware");
const userController = require("../controllers/user");

router.route("/signup")
// signup get route
.get(userController.renderSingupForm)
// signup post route
router.post("/signup",wrapAsync(userController.newUserSignup));



router.route("/login")
// login get route
.get(userController.renderLoginForm)
// login post route
.post(saveRedirect,passport.authenticate("local",{failureRedirect : "/login",failureFlash : true}),userController.login);

router.route("/logout")
// logout get route
.get(userController.logout);

module.exports = router;