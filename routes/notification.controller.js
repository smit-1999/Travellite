const express = require("express");
const router = express.Router();

//Item model
const Notification = require("../models/notif.model");

router.get("/", (req, res) => {
  Notification.find().then(notifs => {
    console.log("request to notif router:", req.query);
    console.log("Resp to notif :", res);
    return res.json(notifs);
  });
});
router.get("/ownerRequests", (req, res) => {
  Notification.find(
    { postOwner: req.body.userName },
    { requester: 1, _id: 0 }
  ).then(notifs => {
    console.log("request to notif router:", req.query);
    console.log(notifs);
    return res.json(notifs);
  });
});

router.post("/add", (req, res) => {
  const newNotif = new Notification(req.body);
  console.log("Notif req data is:", req.body);
  console.log("Saving new incoming notification : ", newNotif);
  newNotif.save(function(err, instance) {
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
      res_object["message"] = "Notification added to the database";
      console.log(res_object);
      res.json(res_object);
    }
  });
});
module.exports = router;
