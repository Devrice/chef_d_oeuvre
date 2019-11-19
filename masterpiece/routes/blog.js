var express = require('express');
var router = express.Router();
const Post = require('./../models/Post');


router.get("/", async (req, res) => {
    let posts = await Post.find({});
    // let post = new Post({title : 'tutu'});
    // post.save();

    console.log(posts);
    res.render("index", {posts: posts});
});

// article/:id on dynamisera les articles
router.get("/article", (req, res) => res.render("article"));

router.get("/article/:id", (req, res) => {

    res.render("article")
});

router.get("/actu", (req, res) => res.render("actu"));


module.exports = router