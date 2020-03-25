const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create a Schema
<<<<<<< HEAD
const user = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },
  mob: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  requests: {
    type: Array
  }
=======
const user =new Schema({
    firstname : {
        type: String
    },
    lastname : {
        type: String
    },
    email : {
        type: String
    },
    mob : {
        type: String
    },
    username : {
        type : String
    },
    password : {
        type : String
    },
    requests:{
        type : Array
    }
>>>>>>> e35db211c89a1c6121a4e42c48d08864b2579055
});

module.exports = mongoose.model("user", user);
