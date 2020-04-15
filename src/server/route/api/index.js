const router = require("express").Router(),
  requisite = require("./requisite"),
  auth = require("./auth"),
  complete = require("./complete"),
  user = require("./user");

router.use("/auth", auth);
router.use("/user", user);
router.use("/complete", complete);
router.use("/requisite", requisite);

module.exports = router;
