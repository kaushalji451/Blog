const { ref, required } = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const Review = require("./review.js");

const blogSchema = new Schema({
  title: String,
  about: String,
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  state: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

blogSchema.post("findOneAndDelete", async (blog) => {
  if (blog) {
    await Review.deleteMany({ _id: { $in: blog.reviews } });
  }
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
