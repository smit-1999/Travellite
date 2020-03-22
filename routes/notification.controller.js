const express = require("express");
const router = express.Router();

//Item model
const Notification = require("../models/notification.model");

router.get("/", (req, res) => {
    Notification.findOne().then(notifs => res.json(notifs));
});

router.post("/add", (req, res) => {
    const newNotif = new Notification(req.body);
  
    console.log(newNotif);
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
        res_object["message"] = "Notification added to the database";
        console.log(res_object);
        res.json(res_object);
      }
    });
  });
  module.exports = router;
