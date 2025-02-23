const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const {isLoggedIn} = require("../middleware");
const contactController=  require("../controllers/contact");
// contact us
router.get("/contact",isLoggedIn,contactController.renderContactForm);
  
  router.post("/contact",isLoggedIn,wrapAsync(contactController.postContact));

  
module.exports = router;