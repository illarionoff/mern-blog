const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const BlogpostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Blogpost = mongoose.model("blogposts", BlogpostSchema);
