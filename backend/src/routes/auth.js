const express = require("express");
const router = express.Router();
const { signup, signin } = require("../handlers/auth");
const db = require("../models");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/users", async function(request, response) {
    let users = await db.User.find();
    console.log(users);
})

module.exports = router;