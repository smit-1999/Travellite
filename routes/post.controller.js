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

  console.log(newPost);
  console.log(req.body);
  newPost.save(function(err, instance) {
    res_object = {
      status: "",
      message: ""
    };
    if (err) {
      res_object["status"] = "failure";
      res_object["message"] = "database error";
      console.log(res_object["status"] + " " + res_object["message"]);
      console.log(err);
      return res.json(res_object);
    } else {
      res_object["status"] = "success";
      res_object["message"] = "Post added to the database";
      console.log(res_object);
      res.json(res_object);
    }
  });

});

module.exports = router;
