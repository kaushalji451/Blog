const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const Blog = require("../models/blog");
const {isLoggedIn,isOwner} = require("../middleware");
const {validateBlog} = require("../middleware");

const blogController = require("../controllers/blog");
const multer = require("multer");
const {storage} = require("../cloudConfig");
const upload = multer({storage});

router.route("/")
// Index route
    .get(wrapAsync(blogController.index))
// create post route
    .post(isLoggedIn,upload.single("blog[image]"),validateBlog,wrapAsync(blogController.createBlog));

    // create  get route
router.get("/new",isLoggedIn,blogController.renderForm);



router.route("/:id")
// show route
.get( wrapAsync(blogController.showBlog))
// edit put route
.put(isOwner,upload.single("blog[image]"),validateBlog,wrapAsync(blogController.updateBlog))
// delte route
.delete(isLoggedIn,isOwner,wrapAsync(blogController.destroyBlog))





// edit get route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(blogController.renderEditForm))




module.exports = router; 