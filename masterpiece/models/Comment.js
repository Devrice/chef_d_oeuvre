const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    typr: String,
    require: true
  }
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
