const router = require("express").Router(),
  homeRoutes = require("./homeRoute");
// errorRoutes = require("./errorRoutes");

router.use("/", homeRoutes);
// router.use("/error", errorRoutes);

module.exports = router;
