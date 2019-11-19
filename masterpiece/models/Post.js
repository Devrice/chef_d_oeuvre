const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
