const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Review = require("../models/review");
const Blog = require("../models/blog");
const {validateReview,isReviewAuthor,isLoggedIn} = require("../middleware");
const reviewController = require("../controllers/review");

// review create post
router.post("/:id/review",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));
// review delete route
router.delete("/:id/reviews/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;