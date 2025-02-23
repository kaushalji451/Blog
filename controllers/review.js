const Review = require("../models/review");
const Blog = require("../models/blog");

module.exports.createReview = async (req, res) => {
  let { id } = req.params;
  let blog = await Blog.findById(id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  blog.reviews.push(newReview);
  await newReview.save();
  await blog.save();
  req.flash("success", "New Review Created");
  res.redirect(`/blogs/${blog._id}`);
};
module.exports.destroyReview = async (req, res) => {
  let { id, reviewId } = req.params;
  await Blog.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", " Review deleted!");
  res.redirect(`/blogs/${id}`);
};
