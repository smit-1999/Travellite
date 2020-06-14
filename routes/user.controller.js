const express = require("express");
const router = express.Router();

//Item model
const User = require("../models/user.model");
const Post = require("../models/post.model");
router.get("/", (req, res) => {
  User.findOne().then((users) => res.json(users));
});

router.post("/add", (req, res) => {
  addUser(req.body)
    .then((res_object) => res.json(res_object))
    .catch((err) => res.json(err));
});

router.put("/", (req, res) => {
  var dateTest = new Date();
  // arr = [
  //   {
  //     id: "123456",
  //     subtype: "book",
  //     title: "c programing",
  //     body: " complete tutorial for c",
  //     filetype: ".pdf",
  //     date: dateTest
  //   }
  // ];
  // console.log(req.body.arr[0][0].pid);
  User.updateOne(
    // { _id: "5e80c2d71c9d44000017fae5" },
    { username: req.body.userId },
    { $push: { requests: req.body.postId } }
  ).then(function(err, updelem) {
    console.log("Upd elem", +JSON.stringify(updelem));
    res.send({ success: true });
  });
});

async function addUser({ name, email, mob, username, password }) {
  const user = await User.findOne({ username });
  var res_object = {
    status: "",
    message: "",
  };
  if (user) {
    res_object["status"] = "0";
    res_object["message"] = "username already exists";
    console.log(res_object);
    return res_object;
  } else {
    User.create({ name, email, mob, username, password }, function(
      err,
      instance
    ) {
      if (err) {
        res_object["status"] = "failure";
        res_object["message"] = "database error";
        console.log(res_data["status"] + " " + res_object["message"]);
        console.log(err);
        return res_object;
      } else {
        res_object["status"] = "1";
        res_object["message"] = "User added to the database";
        console.log(res_object);
        return res_object;
      }
    });
  }
}

router.post("/authentication", authentication);

function authentication(req, res, next) {
  authenticate(req.body)
    .then((res_obj) =>
      res_obj
        ? res.json(res_obj)
        : res.json({ message: "password is incorrect" })
    )
    .catch((err) => next(err));
}

async function authenticate({ username, password }) {
  const user = await User.findOne({ username });
  if (!user) {
    return { username, status: "0", message: "Username not found" };
  } else if (user && !password.localeCompare(user.password)) {
    return {
      username,
      status: "1",
      message: "login succesful",
    };
  } else {
    return {
      username,
      status: "2",
      message: "password incorrect",
    };
  }
}

router.get("/userDetails", async (req, res) => {
  console.log("Inside router", req.query.userName);
  User.find({ username: req.query.userName })
    .then((user) => {
      console.log("request to user router:", req.query);

      return res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/prevRides", async (req, res) => {
  console.log("Requested previous rides.Calling database", req.query);
  if (req.query.type == 1) {
    Post.find({ members: req.query.name })
      .then((y) => {
        return res.json(y);
      })
      .catch((err) => res.json(err));
  } else {
    Post.find({ postOwner: req.query.name })
      .then((y) => {
        return res.json(y);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

module.exports = router;
