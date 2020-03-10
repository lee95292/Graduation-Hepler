const router = require("express").Router(),
  requisiteContoller = require("../controller/requisiteController");

router.get("/listall", requisiteContoller.listall);
router.get("/list", requisiteContoller.list);
router.get("/delete", requisiteContoller.delete);
router.post("/create", requisiteContoller.create);
module.exports = router;
