var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Response");
});

router.put("/user", function (req, res) {
  res.send("Got a PUT request at /user");
});

router.delete("/user", function (req, res) {
  res.send("Got a DELETE request at /user");
});

module.exports = router;
