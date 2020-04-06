const router = require("express").Router(),
  requisiteRouter = require("./requisite");

router.use("/requisite", requisiteRouter);

module.exports = router;
