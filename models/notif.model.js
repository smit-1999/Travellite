const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notif = new Schema({
  postOwner: {
    type: String
  },
  postId: {
    type: String
  },
  typeofNotif: {
    type: String
  },
  requester: {
    type: String
  }
});

module.exports = mongoose.model("Notif", notif);
