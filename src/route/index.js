const router = require("express").Router(),
  requisiteRoute = require("./api/requisite"),
  authRoute = require("./api/auth");

router.use("/reqs", requisiteRoute);
router.use("/user", authRoute);
module.exports = router;
