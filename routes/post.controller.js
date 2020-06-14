const express = require("express");
const router = express.Router();

//Post model
const Post = require("../models/post.model");
const User = require("../models/user.model");

router.get("/", (req, res) => {
  Post.find(req.query).then((posts) => {
    console.log("request to router:", req.query);
    console.log("Resp to search query :", posts, typeof posts);
    return res.json(posts);
  });
});

router.post("/add", (req, res) => {
  const newPost = new Post(req.body);

  console.log(newPost);
  console.log(req.body);
  newPost.save(function(error, instance) {
    let result = {
      status: "",
      message: "",
    };
    if (error) {
      result["status"] = "failure";
      result["message"] = "database error";
      console.log(result["status"] + " " + result["message"]);
      console.log(error);
      return res.json(result);
    } else {
      result["status"] = "success";
      result["message"] = "Post added to the database";
      console.log(result);
      res.json(result);
    }
  });
});

module.exports = router;
