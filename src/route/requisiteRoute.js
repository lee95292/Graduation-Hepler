const router = require("express").Router(),
  requisiteContoller = require("../controller/requisiteController");

router.get("/list", requisiteContoller.list);
router.post("/create", requisiteContoller.create);
module.exports = router;
