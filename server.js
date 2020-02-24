const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const user = require("./routes/user.controller");
const post = require("./routes/post.controller");
const path = require("path");
const app = express();

// app.use(cors({origin: true, credentials: true}));

//DB config
const uri = require("./config/keys").MONGO_URI;
app.use(cors());

app.use(bodyParser.json());

//connect to mongo
// mongoose.connect(uri, { useNewUrlParser : true, useUnifiedTopology: true}).then(() => console.log('Mongoose connected'))
// .catch(err => console.log(err));
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
mongoose.Promise = global.Promise;
connection.once("open", () => {
  console.log("Mongoose connected");
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//use routes
app.use("/user", user);
app.use("/post", post);
// Enable CORS
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET,HEAD,OPTIONS,POST,PUT,DELETE"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   next();
// });
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT | 4000;
//const host = process.env.YOUR_HOST || "0.0.0.0";

app.listen(port, () => console.log("Server started on port " + port));
