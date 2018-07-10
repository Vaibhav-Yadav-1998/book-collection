const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./Routes/router");
const cors = require("cors");
const Config = require("./config.json");

const app = express();
const port = process.env.PORT || 3000;

// mongodb database URI
const dbURI = Config.dbURI;

// connecting to mongodb database
mongoose
  .connect(
    dbURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("connected to database"))
  .catch(err => console.log(err));

// whitelist for cors
const whitelist = Config.whitelist;
// cors config
const corsOption = {
  origin: function(origin, callback) {
    whitelist.indexOf(origin) !== -1
      ? callback(null, true)
      : callback(new Error("Not Allowed by CORS"));
  }
};
// enabling cors for all routes
app.use(cors(corsOption));

// use body-parser middleware
app.use(bodyParser.json());

// initialize router
app.use("/api", router);

// error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(422).send({ error: err.message });
});

// run the server
app.listen(port, err => {
  err ? console.log(err) : console.log("server is working at " + port);
});
