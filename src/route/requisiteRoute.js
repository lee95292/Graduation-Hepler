const router = require("express").Router(),
  requisiteContoller = require("../controller/requisiteController");

router.get("/listall", requisiteContoller.listall);
router.get("/list", requisiteContoller.list);

router.post("/create", requisiteContoller.create);
module.exports = router;
