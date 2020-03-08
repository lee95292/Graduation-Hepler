const router = require("express").Router(),
  homeContoller = require("../controller/homeController");

router.get("/test", homeContoller.index);

module.exports = router;
