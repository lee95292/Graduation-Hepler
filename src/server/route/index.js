const router = require("express").Router(),
  apiRoute = require("./api");

router.use("/api", apiRoute);
module.exports = router;
