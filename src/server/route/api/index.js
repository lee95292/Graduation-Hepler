const router = require("express").Router(),
  requisite = require("./requisite"),
  auth = require("./auth"),
  complete = require("./complete");

router.use("/auth", auth);
router.use("/complete", complete);
router.use("/requisite", requisite);

module.exports = router;
