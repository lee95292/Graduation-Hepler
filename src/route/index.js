const router = require("express").Router(),
  requisiteRoute = require("./requisiteRoute");
// errorRoutes = require("./errorRoutes");

router.use("/requisite", requisiteRoute);
// router.use("/error", errorRoutes);

module.exports = router;
