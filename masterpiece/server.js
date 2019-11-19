var express = require("express");
var app = express();
const port = 3000;
var mongoose = require("mongoose");
var passport = require("passport");

mongoose.connect("mongodb://localhost:27017/blog", { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Database connected");
});
//Serves resources from public folder
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
var blog = require('./routes/blog.js');

app.use('/', blog);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
