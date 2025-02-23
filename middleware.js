const Blog = require("./models/blog");
const Review = require("./models/review");
const { blogSchema, reviewSchema } = require("./Schema");
const ExpressError = require("./utils/ExpressError");

// check does he logged in
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "you must logged in !");
    return res.redirect("/login");
  }
  next();
};

// save redirect status
const saveRedirect = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};
module.exports.saveRedirect = saveRedirect;

// curruser is owner of this blog
const isOwner = async (req, res, next) => {
  let { id } = req.params;
  let blog = await Blog.findById(id);
  if (!blog.owner._id.equals(res.locals.currUser._id)) {
    req.flash("error", "you are not the owner");
    return res.redirect(`/blogs/${id}`);
  }
  next();
};

// review validation middleware
const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errorMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errorMsg);
  }
  next();
};

// blog validation middleware
const validateBlog = (req, res, next) => {
  let { error } = blogSchema.validate(req.body);
  if (error) {
    let errorMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errorMsg);
  } else {
    next();
  }
};



// for check is review author
const isReviewAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review) {
    req.flash("error", "review not found");
    return res.redirect(`/blogs/${id}`);
  }
  if (!review.author || !review.author._id.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the owner");
    return res.redirect(`/blogs/${id}`);
  }
  next();
};

module.exports.isOwner = isOwner;
module.exports.validateReview = validateReview;
module.exports.validateBlog = validateBlog;
module.exports.isReviewAuthor = isReviewAuthor;