const express = require("express");
const router = express.Router();

//Post model
const Post = require("../models/post.model");

router.get("/", (req, res) => {
  Post.find(req.query).then(posts => {
    console.log("request to router:", req.query);
    console.log("Resp to search query :", posts);
    return res.json(posts);
  });
});

router.post("/add", (req, res) => {
  const newPost = new Post(req.body);
  newPost.save().then(post => res.json(post));
});

module.exports = router;
