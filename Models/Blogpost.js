const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const BlogpostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tags: {
    type: [String]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Blogpost = mongoose.model("blogposts", BlogpostSchema);
