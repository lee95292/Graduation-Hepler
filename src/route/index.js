const router = require("express").Router(),
  requisiteRoute = require("./requisiteRoute");

router.use("/reqs", requisiteRoute);
router.use("/user", user);
module.exports = router;
