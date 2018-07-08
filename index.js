const express = require("express");
const app = express();
const port = 3000;

app.listen(port, err => {
  err ? console.log(err) : console.log("app is working at " + port);
});
