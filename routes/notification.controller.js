const express = require("express");
const router = express.Router();

//Item model
const Notification = require("../models/notif.model");
const User = require("../models/user.model");
const Post = require("../models/post.model");

router.get("/", (req, res) => {
  Notification.find().then((notifs) => {
    console.log("request to notif router:", req.query);
    console.log("Resp to notif :", res);
    return res.json(notifs);
  });
});
router.get("/ownerRequests", async (req, res) => {
  console.log(req.query);
  Notification.find(
    { postOwner: req.query.userName, typeofNotif: "request" }
    // { requester: 1, _id: 0, postId: 1 }
  ).then((notifs) => {
    console.log("request to notif router:", req.query);
    console.log(notifs);
    return res.json(notifs);
  });
});

var changeStatus = async function(req, res, next) {
  Notification.updateOne(
    { requester: req.body.requestOwner, postId: req.body.postId },
    { $set: { typeofNotif: "accepted" } }
  ).then((notifs) => {
    console.log("Request accepted:");
    console.log(notifs);
    next();
    //return res.json(notifs);
  });
};

var rejectStatus = async function(req, res, next) {
  Notification.updateOne(
    { requester: req.body.requestOwner, postId: req.body.postId },
    { $set: { typeofNotif: "rejected" } }
  ).then((notifs) => {
    console.log("Request rejected:");
    console.log(notifs);
    next();
    //return res.json(notifs);
  });
};

var addMemberToPost = async function(req, res, next) {
  Post.updateOne(
    { _id: req.body.postId },
    { $push: { members: req.body.requestOwner } }
  ).then((notifs) => {
    console.log("Added to members list in post");
    console.log(req.body.postId);
    console.log(req.body.requestOwner);
    console.log("cc");
    console.log(notifs);
    next();
    //return res.json(notifs);
  });
};

router.put(
  "/ownerRequests/accept",
  [changeStatus, addMemberToPost],
  async (req, res) => {
    //console.log(requestOwner);
    console.log(req.query);
    User.updateOne(
      { username: req.body.requestOwner },
      { $push: { confirmed: req.body.postId } }
    ).then((notifs) => {
      console.log("Confirmed", req.query);
      console.log(notifs);
      return res.json(notifs);
    });
  }
);

router.put("/ownerRequests/reject", [rejectStatus], async (req, res) => {
  //console.log(requestOwner);
  console.log(req.query);
  User.updateOne(
    { username: req.body.requestOwner },
    { $pull: { requests: req.body.postId } }
  ).then((notifs) => {
    console.log("Confirmed", req.query);
    console.log(notifs);
    return res.json(notifs);
  });
});

router.post("/add", (req, res) => {
  const newNotif = new Notification(req.body);
  console.log("Notif req data is:", req.body);
  console.log("Saving new incoming notification : ", newNotif);
  newNotif.save(function(err, instance) {
    var res_object = {
      status: "",
      message: "",
    };
    if (err) {
      res_object["status"] = "failure";
      res_object["message"] = "database error";
      console.log(res_object["status"] + " " + res_object["message"]);
      console.log(err);
      return res.json(res_object);
    } else {
      res_object["status"] = "success";
      res_object["message"] = "Notification added to the database";
      console.log(res_object);
      res.json(res_object);
    }
  });
});
module.exports = router;
