const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create a Schema
const post =new Schema({
    sourceLocation : {
        type: String
    },
    destinationLocation : {
        type: String
    },
    date : {
        type: String
    },
    time : {
        type : String
    },
    members : {
        type : String
    },
    numberOfMembersRequired :{
        type : String
    },
    isFilled :{
        type : String
    }
});

module.exports = mongoose.model('Post', post);