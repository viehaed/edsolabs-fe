const express = require("express");
let router = express();

router.get("/dad", (req, res) => {
    res.send("hi dad");
});

router.get("/mom", (req, res) => {
    res.send("hi mom with id");
});

module.exports = router;