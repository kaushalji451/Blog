const Blog = require("../models/blog");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

// index route
module.exports.index = async (req, res) => {
  const allBlogs = await Blog.find({});
  res.render("blogs/index.ejs", { allBlogs });
};
// show route
module.exports.showBlog = async (req, res) => {
  let { id } = req.params;
  let blog = await Blog.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!blog) {
    req.flash("error", "Blog you required does not exist");
    res.redirect("/blogs");
  }
  res.render("blogs/show.ejs", { blog });
};
// create get
module.exports.renderForm = (req, res) => {
  res.render("blogs/new.ejs");
};
// create post
module.exports.createBlog = async (req, res) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.blog.location,
      limit: 1,
    })
    .send();
  let url = req.file.path;
  let filename = req.file.filename;
  const newBlog = new Blog(req.body.blog);
  newBlog.owner = req.user._id;
  newBlog.image = { url, filename };
  newBlog.geometry = response.body.features[0].geometry;

  await newBlog.save();
  req.flash("success", "New Blog Created!");
  res.redirect("/blogs");
};
// edit get
module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  let blog = await Blog.findById(id);
  if (!blog) {
    req.flash("error", "Blog you required does not exist");
    res.redirect("/blogs");
  }
  let orignalImageUrl = blog.image.url;
  orignalImageUrl = orignalImageUrl.replace("/upload", "/upload/w_250");
  res.render("blogs/edit.ejs", { blog, orignalImageUrl });
};
// edit post
module.exports.updateBlog = async (req, res) => {
  if (!req.body.blog) {
    throw new ExpressError(404, "send valid data for blog");
  }
  let { id } = req.params;
  let blog = await Blog.findByIdAndUpdate(id, { ...req.body.blog });
  if (req.file) {
    let url = req.file.path;
    let filename = req.file.filename;
    blog.image = { url, filename };
    await blog.save();
  }
  req.flash("success", "Blog updated!");
  res.redirect(`/blogs/${id}`);
};
// delete
module.exports.destroyBlog = async (req, res) => {
  let { id } = req.params;
  let deletedBlog = await Blog.findByIdAndDelete(id);
  console.log(deletedBlog);
  req.flash("success", "Blog deleted!");
  res.redirect("/blogs");
};
