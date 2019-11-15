var express = require("express");
var app = express();
const port = 3000;
var mongoose = require("mongoose");

//Serves resources from public folder
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));

// article/:id on dynamisera les articles
app.get("/article", (req, res) => res.render("article"));
app.get("/actu", (req, res) => res.render("actu"));

app.listen(port, () => console.log(`Example app listening on port port!`));
