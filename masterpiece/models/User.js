const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    typr: String,
    require: true
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
