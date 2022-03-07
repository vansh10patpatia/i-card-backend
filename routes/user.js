const router = require("express").Router();
const user = require("../controllers/user.controller");
const middleware = require("../middleware/auth")

router.post("/editUser",middleware, user.editUser);
// const auth = require("../middlewares/auth");



module.exports = router;
