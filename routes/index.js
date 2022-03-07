const express = require("express");
const router = express.Router();

const auth = require("./auth");
const user = require("./user");
router.use("/auth", auth);
// const user = require("./user");
router.use("/user", user);

module.exports = router;