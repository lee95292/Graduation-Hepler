const router = require("express").Router();
const auth = require("../../middleware/auth");

router.get("/check", auth.checker);

router.get("/login");
module.exports = router;
