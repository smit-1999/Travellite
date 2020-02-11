const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./routes/user.controller');


const app=express();

app.use(bodyParser.json());

//DB config
const db =require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db, { useNewUrlParser : true, useUnifiedTopology: true}).then(() => console.log('Mongoose connected'))
.catch(err => console.log(err));

//use routes
app.use('/user', user);

const port = process.env.PORT | 4000;

app.listen(port, () => console.log("Server started on port "+ port));


