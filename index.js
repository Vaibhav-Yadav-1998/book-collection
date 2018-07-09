const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./Routes/router");

const app = express();
const port = process.env.PORT || 3000;

// mongodb database URI
const dbURI = process.env.DBURI;

// connecting to mongodb database
mongoose.connect(
  dbURI,
  { useNewUrlParser: true }
);

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
