const express = require("express");
const router = express.Router();

router.get("/tweets", (req, res) => {
    const str = [{
        "name": "Dustin Bobzin",
        "msg": "This is my first backend tweet!",
        "username": "dbobzin"
    }];

    res.end(JSON.stringify(str));
});

router.post("/addTweet", (req, res) => {
    res.end("NA");
});

module.exports = router;