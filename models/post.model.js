const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create a Schema
const post = new Schema({
  postOwner: {
    type: String
  },
  members: {
    type: Array
  },
  startLocation: {
    type: String
  },
  endLocation: {
    type: String
  },
  date: {
    type: Date
  },
  timeSlot: {
    type: String
  },
  people: {
    type: String
  },
  isFilled: {
    type: String,
    default: false
  }
});

module.exports = mongoose.model("Post", post);

// "sourceLocation":"BITS",
// "destinationLocation":"RGIA",
// "date":"17/2/20",
// "time":"2-3",
// "numberOfMembersRequired":6,
