const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    typr: String,
    require: true
  }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
