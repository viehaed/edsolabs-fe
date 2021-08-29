const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const path = require("path");

app.use(morgan("combined"));

// load views engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/lodash", (req, res) => {
  res.render("lodash");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});